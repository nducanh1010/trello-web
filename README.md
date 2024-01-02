# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# MUI

Cách custom css trong MUI
theme: tạo layout đồng nhất cho cả 1 trang
sx : css nhanh or custom style trong 1 component MUI hỗ trợ, ( BOX, Input,...)
styled : custom lại component để tái sử dụng
nếu dùng global style, khai báo const để tránh re-rendering
const globalStyles= <GlobalStyle style={...}/>
return(<>
{globalStyles}
</>)
