import type { ReleaseAsset, ReleaseManifest, ReleasePlatformGroup } from '../types/release';

export const DEFAULT_RELEASE_MANIFEST_URL = 'https://raw.githubusercontent.com/openfootmanager/openfootmanager/release-metadata/release-manifest.json';

const platformOrder = ['windows', 'macos', 'linux'];

let releaseManifestPromise: Promise<ReleaseManifest> | undefined;

export async function getReleaseManifest(): Promise<ReleaseManifest> {
  if (!releaseManifestPromise) {
    releaseManifestPromise = fetchReleaseManifest();
  }

  return releaseManifestPromise;
}

export function getReleaseManifestUrl(): string {
  return import.meta.env.RELEASE_MANIFEST_URL?.trim() || DEFAULT_RELEASE_MANIFEST_URL;
}

export function groupAssetsByPlatform(assets: ReleaseAsset[]): ReleasePlatformGroup[] {
  const groups = new Map<string, ReleaseAsset[]>();

  for (const asset of assets) {
    const platform = asset.platform.trim().toLowerCase();
    const existingAssets = groups.get(platform);

    if (existingAssets) {
      existingAssets.push(asset);
      continue;
    }

    groups.set(platform, [asset]);
  }

  return Array.from(groups.entries())
    .sort(([leftPlatform], [rightPlatform]) => {
      const leftIndex = platformOrder.indexOf(leftPlatform);
      const rightIndex = platformOrder.indexOf(rightPlatform);
      const normalizedLeftIndex = leftIndex === -1 ? Number.MAX_SAFE_INTEGER : leftIndex;
      const normalizedRightIndex = rightIndex === -1 ? Number.MAX_SAFE_INTEGER : rightIndex;

      if (normalizedLeftIndex !== normalizedRightIndex) {
        return normalizedLeftIndex - normalizedRightIndex;
      }

      return leftPlatform.localeCompare(rightPlatform);
    })
    .map(([platform, platformAssets]) => ({
      platform,
      assets: [...platformAssets].sort(compareReleaseAssets),
    }));
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) {
    return '0 B';
  }

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / 1024 ** exponent;
  const maximumFractionDigits = value >= 100 || exponent === 0 ? 0 : value >= 10 ? 1 : 2;

  return `${new Intl.NumberFormat('en-US', {
    maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(value)} ${units[exponent]}`;
}

export function getPlatformLabel(platform: string): string {
  switch (platform.trim().toLowerCase()) {
    case 'windows':
      return 'Windows';
    case 'macos':
      return 'macOS';
    case 'linux':
      return 'Linux';
    default:
      return platform
        .trim()
        .split(/[-_\s]+/)
        .filter(Boolean)
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ');
  }
}

export function getAssetDisplayLabel(asset: ReleaseAsset): string {
  const label = asset.label.trim();

  if (label) {
    return label;
  }

  const parts = [asset.kind.trim(), asset.extension.trim()]
    .filter(Boolean)
    .map((part) => normalizeDisplayToken(part));

  if (parts.length > 0) {
    return parts.join(' • ');
  }

  return asset.name;
}

async function fetchReleaseManifest(): Promise<ReleaseManifest> {
  const manifestUrl = getReleaseManifestUrl();
  const response = await fetch(manifestUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch release manifest from ${manifestUrl}: ${response.status} ${response.statusText}`);
  }

  const data: unknown = await response.json();

  return validateReleaseManifest(data, manifestUrl);
}

function validateReleaseManifest(data: unknown, manifestUrl: string): ReleaseManifest {
  const manifest = expectRecord(data, `release manifest at ${manifestUrl}`);

  const validatedManifest: ReleaseManifest = {
    schemaVersion: expectNumber(manifest.schemaVersion, 'schemaVersion'),
    product: expectString(manifest.product, 'product'),
    repository: expectString(manifest.repository, 'repository'),
    tag: expectString(manifest.tag, 'tag'),
    version: expectString(manifest.version, 'version'),
    prerelease: expectBoolean(manifest.prerelease, 'prerelease'),
    publishedAt: expectIsoDateString(manifest.publishedAt, 'publishedAt'),
    releaseName: expectString(manifest.releaseName, 'releaseName'),
    releaseUrl: expectUrlString(manifest.releaseUrl, 'releaseUrl'),
    notes: expectString(manifest.notes, 'notes'),
    assets: expectReleaseAssets(manifest.assets),
  };

  if (validatedManifest.schemaVersion !== 1) {
    throw new Error(`Unsupported release manifest schemaVersion: ${validatedManifest.schemaVersion}`);
  }

  return validatedManifest;
}

function expectReleaseAssets(value: unknown): ReleaseAsset[] {
  if (!Array.isArray(value)) {
    throw new Error('Invalid release manifest: assets must be an array');
  }

  if (value.length === 0) {
    throw new Error('Invalid release manifest: assets must contain at least one downloadable asset');
  }

  return value.map((asset, index) => {
    const record = expectRecord(asset, `assets[${index}]`);

    return {
      id: expectNumber(record.id, `assets[${index}].id`),
      name: expectString(record.name, `assets[${index}].name`),
      label: expectOptionalString(record.label, `assets[${index}].label`),
      size: expectNumber(record.size, `assets[${index}].size`),
      contentType: expectString(record.contentType, `assets[${index}].contentType`),
      downloadUrl: expectUrlString(record.downloadUrl, `assets[${index}].downloadUrl`),
      sha256: expectSha256(record.sha256, `assets[${index}].sha256`),
      platform: expectString(record.platform, `assets[${index}].platform`),
      arch: expectString(record.arch, `assets[${index}].arch`),
      kind: expectString(record.kind, `assets[${index}].kind`),
      extension: expectString(record.extension, `assets[${index}].extension`),
    };
  });
}

function compareReleaseAssets(leftAsset: ReleaseAsset, rightAsset: ReleaseAsset): number {
  const leftKind = leftAsset.kind.toLowerCase();
  const rightKind = rightAsset.kind.toLowerCase();

  if (leftKind !== rightKind) {
    return leftKind.localeCompare(rightKind);
  }

  const leftArch = leftAsset.arch.toLowerCase();
  const rightArch = rightAsset.arch.toLowerCase();

  if (leftArch !== rightArch) {
    return leftArch.localeCompare(rightArch);
  }

  return leftAsset.name.localeCompare(rightAsset.name);
}

function expectRecord(value: unknown, fieldName: string): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Invalid release manifest: ${fieldName} must be an object`);
  }

  return value as Record<string, unknown>;
}

function expectString(value: unknown, fieldName: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Invalid release manifest: ${fieldName} must be a non-empty string`);
  }

  return value;
}

function expectOptionalString(value: unknown, fieldName: string): string {
  if (value === undefined) {
    return '';
  }

  if (typeof value !== 'string') {
    throw new Error(`Invalid release manifest: ${fieldName} must be a string`);
  }

  return value;
}

function expectNumber(value: unknown, fieldName: string): number {
  if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value) || value < 0) {
    throw new Error(`Invalid release manifest: ${fieldName} must be a non-negative number`);
  }

  return value;
}

function expectBoolean(value: unknown, fieldName: string): boolean {
  if (typeof value !== 'boolean') {
    throw new Error(`Invalid release manifest: ${fieldName} must be a boolean`);
  }

  return value;
}

function expectIsoDateString(value: unknown, fieldName: string): string {
  const dateString = expectString(value, fieldName);
  const parsedDate = Date.parse(dateString);

  if (Number.isNaN(parsedDate)) {
    throw new Error(`Invalid release manifest: ${fieldName} must be a valid date string`);
  }

  return dateString;
}

function expectUrlString(value: unknown, fieldName: string): string {
  const url = expectString(value, fieldName);

  try {
    new URL(url);
  } catch {
    throw new Error(`Invalid release manifest: ${fieldName} must be a valid URL`);
  }

  return url;
}

function expectSha256(value: unknown, fieldName: string): string {
  const checksum = expectString(value, fieldName).toLowerCase();

  if (!/^[a-f0-9]{64}$/.test(checksum)) {
    throw new Error(`Invalid release manifest: ${fieldName} must be a 64-character SHA-256 hex string`);
  }

  return checksum;
}

function normalizeDisplayToken(value: string): string {
  const trimmedValue = value.trim();

  if (trimmedValue === '') {
    return trimmedValue;
  }

  if (trimmedValue.startsWith('.')) {
    return trimmedValue;
  }

  return trimmedValue
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((segment) => segment.toUpperCase() === segment ? segment : segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}
