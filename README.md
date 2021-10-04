# React_Atomic_design
컴포넌트 설계 문서

1. Atoms
-text 
(총 사용 금액, 제목을 나타낸다.)
-input "input"
(숫자를 입력할 수 있다.)
-button "button"
(버튼을 만들어 클릭하고 이벤트를 나타낼 수 있다.)
-auator 
(이미지를 나타낼 수 있다.)

2. Molcules
-select "select", "Option"
-inputBox "input", "text"
(이름, 금액을 입력하는 란이다.)
-TextBox "text", "avator"
(종류와 이름, 금액이 뜨는 칸)
-TotalCount "div"
(총 지출 금액을 나타낸다.)

3. Organisms
-Header "h2"
(제목)
-Form "kind", "value", "option"
(지출목록, 종류에 따라 지출 내역을 나타낸다.)
-List
(지출목록 리스트)
-Footer
(총 지출 목록 자료를 나타낸다.)


4. Template & page
Pages "Receipt"
(레이아웃의 형태 구성)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
