'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required("请输入姓名").label("姓名"),
  subject: yup.string().required("请输入邮箱").label("邮箱"),
  message: yup.string().required("请输入留言内容").label("留言"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <>
      <style jsx global>{`
        .cn-contactform-input input::placeholder,
        .cn-contactform-input textarea::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
          opacity: 1 !important;
        }
      `}</style>
      <form onSubmit={onSubmit} style={{ fontFamily: 'var(--tp-ff-noto-serif-sc), serif' }}>
        <div className="cn-contactform-input mb-25">
          <label>姓名</label>
          <input id='name' {...register("name")} type="text" placeholder="请输入您的姓名" />
          <ErrorMsg msg={errors.name?.message!} />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>邮箱</label>
          <input id='subject' {...register("subject")} type="text" placeholder="请输入您的邮箱" />
          <ErrorMsg msg={errors.subject?.message!} />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>留言</label>
          <textarea id='message' {...register("message")} placeholder="请告诉我们您的想法"></textarea>
          <ErrorMsg msg={errors.message?.message!} />
        </div>
        <div className="cn-contactform-btn">
          <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
            发送消息
          </button>
        </div>
      </form>
    </>
  );
}
