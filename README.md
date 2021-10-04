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
-UsedValue "text", "avator"
(종류 이미지와 이름, 금액을 나타낸다.)
-RemainedV "div"
(총 지출 금액을 나타낸다.)

3. Organisms
-inputValue "title", "inputBox"
(제목, 입력을 받을 수 있는 부분)
-VList "UsedValue"
(지출목록, 종류에 따라 지출 내역을 나타낸다.)
-NStatement "RemainedV", "totalV"
(총 지출 목록 자료)

4. Template & page
Rtemp "inputVaule", "usedValue", "NumericalStatment"
(레이아웃의 형태 상단과 하단으로 구성)
