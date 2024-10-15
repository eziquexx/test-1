package com.hellojalbajo.test;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MessageMapper {

	public Message getMessageById(Integer id);
}
