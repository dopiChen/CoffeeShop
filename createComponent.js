const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 配置区（根据实际项目结构调整）
const COMPONENTS_DIR = path.join(process.cwd(), 'miniprogram/components');

// 生成基础文件内容
const templates = {
  wxml: (name) => `<view class="container">
  <slot name="default"/>
</view>`,

  wxss: (name) => `.container {
  position: relative;
}`,

  ts: (name) => `Component({
  properties: {
    // 组件属性
  },
  data: {
    // 组件数据
  },
  methods: {
    // 自定义方法
  }
})`,

  json: (name) => `{
  "component": true,
  "usingComponents": {}
}`
};

// 主逻辑
async function createComponent() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('请输入组件名称（英文，如 my-button）: ', async (name) => {
    rl.close();

    const componentDir = path.join(COMPONENTS_DIR, name);
    if (fs.existsSync(componentDir)) {
      console.error('错误：组件已存在');
      process.exit(1);
    }

    fs.mkdirSync(componentDir, { recursive: true });

    Object.entries(templates).forEach(([ext, template]) => {
      const fileName = `${name}.${ext}`;
      fs.writeFileSync(
        path.join(componentDir, fileName),
        template(name)
      );
      console.log(`创建成功: ${fileName}`);
    });
  });
}

createComponent();