// app/routes.ts 수정 영역
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // 입구: 브라우저 언어를 확인하고 /ko 등으로 보내주는 파일 영역
  index("routes/home.tsx"),

  // 메인 구역: 주소에 언어가 붙었을 때 작동하는 영역
  route(":lang", "routes/layout.tsx", [
    // 아직 파일이 없는 아래 기능들은 주석 처리함 영역
    // index("routes/dashboard.tsx"),
    // route("image-conv", "routes/image-converter.tsx"),
    // route("counter", "routes/counter.tsx"),
    // route("history/:page", "routes/history.tsx"),
  ]),
] satisfies RouteConfig;