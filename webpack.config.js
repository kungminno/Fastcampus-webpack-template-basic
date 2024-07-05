//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {

    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js',

    //결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    module:{
        rules:[
            {
                test:/\.s?css$/,
                use: [
                    'style-loader', //해석한 css 를 html에 삽입
                    'css-loader' ,   //자바스크립트에서 css를 해석
                    'postcss-loader', //해석한 scss 를 html에 삽입
                    'sass-loader'       //자바스크립트에서 scss를 해석
                ]
            },
            {
                test:/\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리방식 등 다양한 플러그인들을 처리
    plugins:[
        new HtmlPlugin({
            template: './index.html'      //생성된 HTML 파일에 번들링된 자바스크립트와 CSS 파일을 자동으로 추가
        }),
        new CopyPlugin({
            patterns:[
                {from: 'static'}        //빌드 시점에 웹팩으로 빌드한 결과물 외에, 원하는 파일들을 추가로 복사
            ]
        })
    ],

    devServer:{
        host: 'localhost'
    }
    
}