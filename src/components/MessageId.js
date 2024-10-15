
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function MessageId() {
	const params = useParams(); //useParams로 :id 이 값을 가져와서 저장.
	const messageId = params.id; 
	const [messages, SetMessages] = useState({});
	
	// console.log(params); // 객체로 값을 가져옴. (key: value)
	// console.log(params.id); // value값만 추출됨.
	
	useEffect(() => {
	
		fetch(`/messages/${messageId}`) // fetch로 해당 url로 요청
		.then(response => {
			if (!response.ok) { // 응답 못 받으면
                throw new Error('Network response was not ok');
            }
            return response.json(); // 응답 받으면 json 형식으로 리턴. 아래 .then()으로 리턴함.
		})
		.then(item => { // 반환받은(응답해서 받아온) 객체를 item이란 매개변수에 저장.
			SetMessages(item); //item을 상태 업데이트 변수인 SetMessages로 값을 전달하여 messages라는 상태변수에 값을 저장.
		})
		.catch(error => {
			console.error("error: ", error);
		})
	}, [messageId])
	
	// console.log(messageId); // 1출력
	
	const { id, message } = messages;
	// console.log("messagesid는" + messages.id); // 값 받아왔는지 테스트용.

	
	return (
		<>
			<ul>
				<li>ID는 {messages.id}</li>
				<li>Message는 {messages.message}</li>
			</ul>
		</>
	)
}

export default MessageId;