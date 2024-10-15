package com.hellojalbajo.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
	@Autowired
	private MessageMapper messageMapper;

	public Message getMessage(Integer id) {
		return messageMapper.getMessageById(id);
	}
}
