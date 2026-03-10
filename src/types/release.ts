export interface ReleaseAsset {
  id: number;
  name: string;
  label: string;
  size: number;
  contentType: string;
  downloadUrl: string;
  sha256: string;
  platform: string;
  arch: string;
  kind: string;
  extension: string;
}

export interface ReleaseManifest {
  schemaVersion: number;
  product: string;
  repository: string;
  tag: string;
  version: string;
  prerelease: boolean;
  publishedAt: string;
  releaseName: string;
  releaseUrl: string;
  notes: string;
  assets: ReleaseAsset[];
}

export interface ReleasePlatformGroup {
  platform: string;
  assets: ReleaseAsset[];
}
