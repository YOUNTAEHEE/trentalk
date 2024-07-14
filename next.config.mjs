import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 다른 설정을 여기에 추가할 수 있습니다.
};

export default withPWA({
  dest: 'public',
  // PWA 관련 설정을 여기에 추가할 수 있습니다.
})(nextConfig);
