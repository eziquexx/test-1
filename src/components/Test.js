/**
 * 
 */

import { useEffect, useState } from "react";

function Test() {
	
	const [hello, setHello] = useState('');
	
	useEffect(() => {
	        fetch("/api/test")  // 경로를 /api/test로 수정
	            .then((response) => {
	                if (!response.ok) {
	                    throw new Error('Network response was not ok');
	                }
	                return response.text();
	            })
	            .then((data) => {
	                setHello(data);
	            })
	            .catch((error) => {
	                console.error('There was a problem with the fetch operation:', error);
	            });
	    }, []);
	
	return (
		<>
			<div>
		        백엔드 데이터 : {hello}
		    </div>
		</>
	)
}

export default Test;