package com.hellojalbajo.test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	@GetMapping("/api/test")
	public String hello() {
		return "springboot, react 연결 테스트.";
	}
}
