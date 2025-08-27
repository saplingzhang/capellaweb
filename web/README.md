# Capella Residence 楼盘门户网站
# Capella Residence Website

为单一楼盘开发的豪华房地产门户网站，专为欧美客户设计。
A luxury real estate portal website for a single residential development, designed for European and American clients.

## 🏢 项目概述 | Project Overview

Capella Residence 是一个现代化的响应式网站，展示豪华住宅开发项目。网站特色包括：
Capella Residence is a modern, responsive website showcasing a luxury residential development. The site features:

- **多页面导航 | Multi-page navigation**: 首页、关于我们、户型展示、价格信息、联系我们 | Home, About Us, Floor Plans, Pricing, Contact
- **响应式设计 | Responsive design**: 针对桌面和移动设备进行优化 | Optimized for both desktop and mobile devices
- **交互功能 | Interactive features**: 联系表单、价格计算器、图片画廊 | Contact forms, price calculator, image galleries
- **专业展示 | Professional presentation**: 适合国际客户的简洁设计 | Clean design suitable for international clients

## 📁 项目结构 | Project Structure

```
web/
├── index.html          # 首页 - 主着陆页面 | Homepage - Main landing page
├── about.html          # 关于我们 - 公司信息 | About Us - Company information
├── units.html          # 户型展示 - 户型布局和规格 | Floor Plans - Unit layouts and specifications
├── pricing.html        # 价格信息 - 成本和付款计划 | Pricing - Costs and payment plans
├── contact.html        # 联系我们 - 联系表单和信息 | Contact - Contact form and information
├── css/
│   └── style.css       # 主样式表，包含响应式设计 | Main stylesheet with responsive design
├── js/
│   ├── navigation.js   # 可复用导航组件 | Reusable navigation component
│   └── main.js         # 通用功能和交互 | Common functionality and interactions
└── images/
    └── README.md       # 图片要求和规格说明 | Image requirements and specifications
```

## 🚀 快速开始 | Getting Started

### 前置要求 | Prerequisites
- 网页浏览器（Chrome、Firefox、Safari、Edge）| Web browser (Chrome, Firefox, Safari, Edge)
- 本地Web服务器（开发时可选）| Local web server (optional for development)

### 运行网站 | Running the Website

#### 方式一：直接打开文件 | Option 1: Direct File Opening
1. 导航到 `web` 目录 | Navigate to the `web` directory
2. 双击 `index.html` 在浏览器中打开 | Double-click `index.html` to open in your browser

#### 方式二：本地Web服务器（推荐）| Option 2: Local Web Server (Recommended)
```bash
# 使用 Python | Using Python
cd web
python -m http.server 8080

# 使用 Node.js | Using Node.js
cd web
npx http-server . -p 8080

# 使用 PHP | Using PHP
cd web
php -S localhost:8080
```

然后在浏览器中打开 http://localhost:8080。
Then open http://localhost:8080 in your browser.

## 🎨 功能特色 | Features

### 导航组件 | Navigation Component
- **可复用菜单 | Reusable menu**: 在 `js/navigation.js` 中实现 | Implemented in `js/navigation.js`
- **移动端响应 | Mobile responsive**: 小屏幕设备的汉堡菜单 | Hamburger menu for small screens
- **当前页面高亮 | Active page highlighting**: 自动检测当前页面 | Automatic current page detection

### 响应式设计 | Responsive Design
- **移动优先 | Mobile-first approach**: 针对所有屏幕尺寸优化 | Optimized for all screen sizes
- **灵活网格系统 | Flexible grid system**: CSS Grid 和 Flexbox 布局 | CSS Grid and Flexbox layouts
- **触屏友好 | Touch-friendly**: 大按钮和移动端易用导航 | Large buttons and easy navigation on mobile

### 交互元素 | Interactive Elements
- **联系表单 | Contact forms**: 验证和用户反馈 | Validation and user feedback
- **价格计算器 | Price calculator**: 动态成本估算 | Dynamic cost estimation
- **图片模态框 | Image modals**: 点击放大户型图 | Click to enlarge floor plans
- **平滑动画 | Smooth animations**: CSS动画和过渡效果 | CSS animations and transitions

### 内容板块 | Content Sections

#### 首页 | Homepage (`index.html`)
- 带行动号召的英雄区域 | Hero section with call-to-action
- 精选户型展示 | Featured floor plans
- 高端设施展示 | Premium amenities showcase
- 快速统计信息 | Quick statistics

#### 关于我们 | About Us (`about.html`)
- 公司故事和使命 | Company story and mission
- 领导团队简介 | Leadership team profiles
- 核心价值和成就 | Core values and achievements
- 可持续发展承诺 | Sustainability commitment

#### 户型展示 | Floor Plans (`units.html`)
- 详细的单元规格 | Detailed unit specifications
- 交互式户型图 | Interactive floor plan images
- 功能对比 | Feature comparisons
- 价格集成 | Pricing integration

#### 价格信息 | Pricing (`pricing.html`)
- 综合价格表 | Comprehensive pricing tables
- 楼层和景观溢价 | Floor and view premiums
- 付款计划选项 | Payment plan options
- 交互式成本计算器 | Interactive cost calculator

#### 联系我们 | Contact (`contact.html`)
- 带验证的联系表单 | Contact form with validation
- 销售团队信息 | Sales team information
- 位置和路线 | Location and directions
- 常见问题解答 | FAQ section

## 🛠️ 定制化 | Customization

### 添加图片 | Adding Images
1. 将图片添加到 `images/` 目录 | Add your images to the `images/` directory
2. 更新HTML文件中的 `src` 属性 | Update the `src` attributes in HTML files
3. 遵循 `images/README.md` 中的命名规范 | Follow the naming conventions in `images/README.md`

### 修改内容 | Modifying Content
- **文本内容 | Text content**: 直接在HTML文件中编辑 | Edit directly in HTML files
- **样式 | Styling**: 修改 `css/style.css` | Modify `css/style.css`
- **功能 | Functionality**: 更新 `js/main.js` | Update `js/main.js`

### 配色方案 | Color Scheme
网站使用专业的配色方案：| The website uses a professional color palette:
- **主色 | Primary**: #EB6122 (橙色 | Orange)
- **次色 | Secondary**: #D04E0E (深橙色 | Dark Orange)
- **强调色 | Accent**: #FFE5D1 (浅橙色 | Light Orange)
- **文字 | Text**: #333333 (深灰色 | Dark Gray)

### 字体排版 | Typography
- **字体系列 | Font Family**: Arial, Helvetica, sans-serif
- **响应式大小 | Responsive sizing**: 随屏幕尺寸缩放 | Scales with screen size
- **专业层次 | Professional hierarchy**: 清晰的标题结构 | Clear heading structure

## 📱 浏览器支持 | Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ 移动浏览器 | Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 技术细节 | Technical Details

### 依赖项 | Dependencies
- **Font Awesome 6.0.0**: 图标和符号 | Icons and symbols
- **无JavaScript框架 | No JavaScript frameworks**: 纯原生JavaScript | Pure vanilla JavaScript
- **CSS Grid & Flexbox**: 现代布局技术 | Modern layout techniques

### 性能优化 | Performance Optimizations
- **懒加载 | Lazy loading**: 图片按需加载 | Images load when needed
- **优化动画 | Optimized animations**: CSS过渡和变换 | CSS transitions and transforms
- **压缩资源 | Compressed assets**: 尽可能最小化 | Minified where possible
- **语义化HTML | Semantic HTML**: SEO和可访问性友好 | SEO and accessibility friendly

### SEO功能 | SEO Features
- **元描述 | Meta descriptions**: 每个页面都有独特描述 | Each page has unique descriptions
- **语义化标记 | Semantic markup**: 正确的HTML5结构 | Proper HTML5 structure
- **替代文本 | Alt text**: 所有图片都有描述性alt属性 | All images have descriptive alt attributes
- **移动友好 | Mobile-friendly**: 准备好Google移动优先索引 | Google mobile-first indexing ready

## 🌐 部署 | Deployment

### 静态托管 | Static Hosting
此网站可以部署到任何静态托管服务：| This website can be deployed to any static hosting service:

- **GitHub Pages**: 静态网站免费托管 | Free hosting for static sites
- **Netlify**: 带表单处理的简易部署 | Easy deployment with form handling
- **Vercel**: 带预览URL的快速部署 | Fast deployment with preview URLs
- **AWS S3**: 可扩展云托管 | Scalable cloud hosting
- **传统网页托管 | Traditional web hosting**: 任何支持静态文件的提供商 | Any provider supporting static files

### 域名设置 | Domain Setup
1. 购买域名 | Purchase a domain name
2. 配置DNS设置 | Configure DNS settings
3. 上传文件到托管提供商 | Upload files to hosting provider
4. 测试所有功能 | Test all functionality

## 📞 支持 | Support

如有问题或修改需求，请参考：| For questions or modifications, please refer to:
- `js/main.js` 中的联系表单功能 | Contact form functionality in `js/main.js`
- `js/navigation.js` 中的导航组件 | Navigation component in `js/navigation.js`
- `css/style.css` 中的响应式样式 | Responsive styles in `css/style.css`

## 🎯 未来增强 | Future Enhancements

未来版本的潜在改进：| Potential improvements for future versions:
- **内容管理系统 | Content Management System**: 简化内容更新 | Easy content updates
- **多语言支持 | Multi-language support**: 额外的语言选项 | Additional language options
- **虚拟导览 | Virtual tours**: 3D房产参观 | 3D property walkthroughs
- **集成API | Integration APIs**: CRM和潜客管理 | CRM and lead management
- **高级分析 | Advanced analytics**: 访客跟踪和洞察 | Visitor tracking and insights

---

**❤️ 专为豪华房地产营销而构建 | Built with ❤️ for luxury real estate marketing**