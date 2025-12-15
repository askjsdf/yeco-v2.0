'use client'
import React, { useState, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';
import { useTranslation } from '@/i18n/hooks/useTranslation';

type FormData = {
  name: string;
  email: string;
  message: string;
};

// prop type
type IProps = {
  btnCls?:string;
}
export default function ContactForm({btnCls=''}:IProps) {
  const { t } = useTranslation();

  const schema = useMemo(() => yup.object().shape({
    name: yup.string().required(t.contact.validation.nameRequired).label(t.contact.name),
    email: yup.string().required(t.contact.validation.emailRequired).email(t.contact.validation.emailInvalid).label(t.contact.email),
    message: yup.string().required(t.contact.validation.messageRequired).label(t.contact.message),
  }), [t]);

  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const onSubmit = handleSubmit(async (data:FormData) => {
    setSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('https://formspree.io/f/meoyvyon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: t.contact.success });
        reset();
      } else {
        setMessage({ type: 'error', text: t.contact.error });
      }
    } catch (error) {
      setMessage({ type: 'error', text: t.contact.networkError });
    } finally {
      setSubmitting(false);
    }
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
        {/* 提交状态提示 */}
        {message.text && (
          <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'} mb-25`} style={{
            padding: '15px',
            borderRadius: '4px',
            backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
            color: message.type === 'success' ? '#155724' : '#721c24',
            border: `1px solid ${message.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
          }}>
            {message.text}
          </div>
        )}

        <div className="cn-contactform-input mb-25">
          <label>{t.contact.name}</label>
          <input id='name' {...register("name")} type="text" placeholder={t.contact.namePlaceholder} disabled={submitting} />
          <ErrorMsg msg={errors.name?.message!} />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>{t.contact.email}</label>
          <input id='email' {...register("email")} type="email" placeholder={t.contact.emailPlaceholder} disabled={submitting} />
          <ErrorMsg msg={errors.email?.message!} />
        </div>
        <div className="cn-contactform-input mb-25">
          <label>{t.contact.message}</label>
          <textarea id='message' {...register("message")} placeholder={t.contact.messagePlaceholder} disabled={submitting}></textarea>
          <ErrorMsg msg={errors.message?.message!} />
        </div>
        <div className="cn-contactform-btn">
          <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit" disabled={submitting}>
            {submitting ? t.contact.submitting : t.contact.submit}
          </button>
        </div>
      </form>
    </>
  );
}
