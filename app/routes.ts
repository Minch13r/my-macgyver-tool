// app/routes.ts 영역
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route(":lang", "routes/layout.tsx", [
    // 주소에 아무것도 안 붙었을 때(index) 대시보드를 보여줌 영역
    index("routes/dashboard.tsx"), 
    
    // 후원
    route("donate", "routes/donate.tsx"), 
    // 이미지 변환
    route("image-conv", "routes/image-converter.tsx"),
    // 글자수 세기
    route("counter", "routes/counter.tsx"),
    // sha 암호화
    route("sha", "routes/sha.tsx"),
    // bcrypt
    route("bcrypt", "routes/bcrypt.tsx"),
  ]),
] satisfies RouteConfig;