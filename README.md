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
