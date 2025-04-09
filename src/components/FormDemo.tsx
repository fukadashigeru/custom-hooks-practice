"use client";

import { useForm } from '../hooks/useForm';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

export function FormDemo() {
  const validate = (values: FormValues) => {
    const errors: Record<string, string> = {};

    if (!values.name) {
      errors.name = '名前は必須です';
    }

    if (!values.email) {
      errors.email = 'メールアドレスは必須です';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = '有効なメールアドレスを入力してください';
    }

    if (!values.password) {
      errors.password = 'パスワードは必須です';
    } else if (values.password.length < 6) {
      errors.password = 'パスワードは6文字以上必要です';
    }

    return errors;
  };

  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">名前</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${
            touched.name && errors.name ? 'border-red-500' : ''
          }`}
        />
        {touched.name && errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block mb-2">メールアドレス</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${
            touched.email && errors.email ? 'border-red-500' : ''
          }`}
        />
        {touched.email && errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block mb-2">パスワード</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 border rounded ${
            touched.password && errors.password ? 'border-red-500' : ''
          }`}
        />
        {touched.password && errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        送信
      </button>
    </form>
  );
} 
