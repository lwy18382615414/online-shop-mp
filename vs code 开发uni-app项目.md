vs code 开发uni-app项目

1、创建项目

创建javascript开发的项目

```
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```

创建typescript开发的项目

```
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

或访问链接

https://gitee.com/dcloud/uni-preset-vue/repository/archive/vite-ts.zip

2、按照uni-app插件

- uni-create-view // 快速创建页面
- uni-helper // uniapp代码提示
- uniapp小程序扩展 // 鼠标悬停查看文档

2、npm i 按照node_modules包

3、根据package.json内容选择运行的类型

4、ts类型校验

```json
// 1、按照类型声明文件
npm i -D @types/wechat-miniprogram @uni-helper/uni-app-types
// 2、配置tsconfig.json
{
	"compilerOptions": {
		"types": [
      		"@dcloudio/types",
      		"@types/wechat-miniprogram",
      		"@uni-helper/uni-app-types"
    	]
	},
	"vueCompilerOptions": {
    	"nativeTags": ["block", "component", "template", "slot"]
  	},
}
```

5、json注释问题

在vscode设置中的文件关联中添加不检查json注释的文件

![image-20240307141459240](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240307141459240.png)

6、在manifest.json文件中把微信小程序appid填上

7、安装uni-ui组件库

```json
// 1、使用pnpm i @dcloudio/uni-ui

// 2、在pages.json文件在添加组件自定引入
"easycom": {
		"autoscan": true,
		"custom": {
			// uni-ui 规则如下配置
			"^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
		}
	},
// 3、配置组件ts类型 安装 pnpm install -D @uni-helper/uni-ui-types
// 在tconfig.json文件中添加
"types": ["@dcloudio/types", "miniprogram-api-typings", "@uni-helper/uni-app-types", "@uni-helper/uni-ui-types"]
```

