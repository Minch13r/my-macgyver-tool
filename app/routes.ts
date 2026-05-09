// app/routes.ts 영역
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route(":lang", "routes/layout.tsx", [
    // 📍 주소에 아무것도 안 붙었을 때(index) 대시보드를 보여줌 영역
    index("routes/dashboard.tsx"), 
    
    // 📍 /donate 주소가 붙었을 때 후원 페이지를 보여줌 영역
    route("donate", "routes/donate.tsx"), 
  ]),
] satisfies RouteConfig;