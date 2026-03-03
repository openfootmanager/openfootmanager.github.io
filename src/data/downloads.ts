export interface DownloadOption {
  label: string;
  arch: string;
  url: string;
  size: string;
  sha256: string;
  filename: string;
}


const VERSION = '0.1.0'
const BASE = `https://github.com/openfootmanager/openfootmanager/releases/download/v${VERSION}`;

export const releaseDate = new Date(2026, 2, 2); // March 2nd, 2026

export const windowsDownloads: DownloadOption[] = [
  { label: '.exe Setup', arch: 'x64', url: `${BASE}/openfootmanager_${VERSION}_x64-setup.exe`, size: '4.91 MB', sha256: '3d49cfc0e45f4cc556dad261ac89fe073d684abbb3bd26b6be7e3a1c2b423f84', filename: `openfootmanager_${VERSION}_x64-setup.exe` },
  { label: '.msi Installer', arch: 'x64', url: `${BASE}/openfootmanager_${VERSION}_x64_en-US.msi`, size: '6.31 MB', sha256: '2361366c0a0b60a5b20558e986a50e6071bca15e5d7e9fecaab986abba26f301', filename: `openfootmanager_${VERSION}_x64_en-US.msi` },
];

export const macosDownloads: DownloadOption[] = [
  { label: '.dmg', arch: 'Apple Silicon', url: `${BASE}/openfootmanager_${VERSION}_aarch64.dmg`, size: '6.75 MB', sha256: '1e10a69b5b6fce2c52883965ead6537ed9217eb63ac6a8b94a65756f9f7168cb', filename: `openfootmanager_${VERSION}_aarch64.dmg` },
  { label: '.dmg', arch: 'Intel (x64)', url: `${BASE}/openfootmanager_${VERSION}_x64.dmg`, size: '6.92 MB', sha256: 'cd3af782fccb20db6d31e4a9cfbe5d112b3a27e578b472bd74a0672813f0b78e', filename: `openfootmanager_${VERSION}_x64.dmg` },
  { label: '.app.tar.gz', arch: 'Apple Silicon', url: `${BASE}/openfootmanager_aarch64.app.tar.gz`, size: '6.5 MB', sha256: '3deee43b628de7cf220971336cc84761385fb5494270fa915faa78700c2d95a5', filename: 'openfootmanager_aarch64.app.tar.gz' },
  { label: '.app.tar.gz', arch: 'Intel (x64)', url: `${BASE}/openfootmanager_x64.app.tar.gz`, size: '6.67 MB', sha256: '381e464a8071cf45aa7804836f2e8cf779ea4cb00b984f27a0ac3fcf105c7b07', filename: 'openfootmanager_x64.app.tar.gz' },
];

export const linuxDownloads: DownloadOption[] = [
  { label: '.deb', arch: 'x64', url: `${BASE}/openfootmanager_${VERSION}_amd64.deb`, size: '7.57 MB', sha256: 'f78f88d0857011fc84ee519ed6a9934a82db4443abad03378300a4aba0dec6bc', filename: `openfootmanager_${VERSION}_amd64.deb` },
  { label: '.deb', arch: 'ARM64', url: `${BASE}/openfootmanager_${VERSION}_arm64.deb`, size: '7.46 MB', sha256: 'aec50eb6c34ea669adbc74dbdca9ae3eda0da7c5ed346e439d9f88a1092480f7', filename: `openfootmanager_${VERSION}_arm64.deb` },
  { label: '.AppImage', arch: 'x64', url: `${BASE}/openfootmanager_${VERSION}_amd64.AppImage`, size: '81.3 MB', sha256: '273e970a0ad3d2b31d69da64b3a3def44b33d525788cffd345fba6f96f95bbcc', filename: `openfootmanager_${VERSION}_amd64.AppImage` },
  { label: '.AppImage', arch: 'ARM64', url: `${BASE}/openfootmanager_${VERSION}_aarch64.AppImage`, size: '79.5 MB', sha256: '3a0d8b7ca8618bebc3686f671ff395e0c6937c52f3d7c6ee0d7e76b0022b14d8', filename: `openfootmanager_${VERSION}_aarch64.AppImage` },
  { label: '.rpm', arch: 'x86_64', url: `${BASE}/openfootmanager-${VERSION}-1.x86_64.rpm`, size: '7.57 MB', sha256: '9879963fe33c1134175134ec670a1fbdaab78163e80a8d9606046549f4a0ea26', filename: `openfootmanager-${VERSION}-1.x86_64.rpm` },
  { label: '.rpm', arch: 'aarch64', url: `${BASE}/openfootmanager-${VERSION}-1.aarch64.rpm`, size: '7.46 MB', sha256: '44ee11a4ad27f3dd5f05f799fedb7cc6848677eb29f43c3791c7f4144c2d578a', filename: `openfootmanager-${VERSION}-1.aarch64.rpm` },
];

export const allDownloads: DownloadOption[] = [...windowsDownloads, ...macosDownloads, ...linuxDownloads];
