module.exports = {
    siteUrl: 'https://trentalk.vercel.app', // .게시하는 site의 url
    generateRobotsTxt: true, // robots.txt generate 여부 (자동생성 여부)
    sitemapSize: 7000, // sitemap별 최대 크기 (최대 크기가 넘어갈 경우 복수개의 sitemap으로 분리됨)
    priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
    robotsTxtOptions: {
        // 정책 설정
        policies: [
            {
                userAgent: '*', // 모든 agent 허용
                allow: '/', // 모든 페이지 주소 크롤링 허용
            },
            // 추가 정책이 필요할 경우 배열 요소로 추가 작성
        ]
    } // robots.txt 옵션 설정
  }