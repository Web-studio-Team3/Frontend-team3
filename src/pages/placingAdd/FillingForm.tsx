import React from 'react';
import styles from "./FillingForm.module.scss";
import {Button, DatePicker, Form, Input} from "antd";
import {Link} from "react-router-dom";
import Header from "@components/header";
import {Breadcrumb} from 'antd';
import {Cascader} from 'antd';
import {message, Upload, InputNumber} from 'antd';
import type {RcFile, UploadFile, UploadProps} from 'antd/es/upload/interface';
import {useState} from 'react';
import {HomeOutlined, EditOutlined} from '@ant-design/icons';
import {MdCurrencyRuble} from "react-icons/md";
import {GoArrowLeft} from "react-icons/go";

const {Dragger} = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const {status} = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const {TextArea} = Input;

interface Option {
    value: string;
    label: string;
    children?: Option[];
}

const optionsClothes: Option[] = [
    {
        value: 'dress',
        label: 'Платье',
    },
    {
        value: 'jeans',
        label: 'Джинсы',
    }, {
        value: 'shorts',
        label: 'Шорты',
    }, {
        value: 'sweater',
        label: 'Свитер',
    },
    {
        value: 't-short',
        label: 'Футболка',
    }
];

const optionsColor: Option[] = [
    {
        value: 'black',
        label: 'Черный',
    },
    {
        value: 'white',
        label: 'Белый',
    }, {
        value: 'red',
        label: 'Красный',
    }, {
        value: 'blue',
        label: 'Синий',
    },
    {
        value: 'green',
        label: 'Зеленый',
    }
];

const optionsCondition: Option[] = [
    {
        value: 'good',
        label: 'Хорошее',
    },
    {
        value: 'bad',
        label: 'Плохое',
    }, {
        value: 'norm',
        label: 'Удовлетворительное ',
    },
];

const optionsSize: Option[] = [
    {
        value: 'xs',
        label: 'XS',
    },
    {
        value: 's',
        label: 'S',
    }, {
        value: 'M',
        label: 'M ',
    }, {
        value: 'l',
        label: 'L ',
    }, {
        value: 'xl',
        label: 'XL ',
    }, {
        value: 'xxl',
        label: 'XXL ',
    }, {
        value: 'xxxl',
        label: 'XXXL',
    },
];

const onChange = (value: string[]) => {
    console.log(value);
};

const displayRender = (labels: string[]) => labels[labels.length - 1];

const FillingForm = () => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange1 = () => {
        setIsChecked1(!isChecked1);
        setIsChecked2(false);
    };

    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
        setIsChecked1(false);
    };
    return (
        <main className={styles.body}>
            <Header/>
            <Breadcrumb separator={<span style={{color: 'rgba(255, 255, 254, 0.50)', fontSize: 16}}> / </span>} style={{
                color: 'white',
                fontSize: 32,
                fontFamily: 'Inter',
                fontWeight: '700',
                paddingRight: 230
            }}>
                <Breadcrumb.Item>Одежда</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to="/categories" style={{color: 'rgba(255, 255, 254, 0.50)', fontSize: 16}}>Личные вещи</Link>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Form className={styles.form} layout="horizontal">

                <Button type="link" icon={<GoArrowLeft className='iconStyle' style={{
                    color: "white",
                    marginLeft: -16,
                    fontWeight: '500',
                    textAlign: 'left'
                }}/>} style={{color: "white"}}><Link style={{
                    opacity: 0.85,
                    color: '#FFFFFE',
                    fontSize: 12,
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    marginLeft: 5
                }} to='/categories'>
                    Вернуться к выбору категорий
                </Link>
                </Button>

                <br/>
                <label className='label' style={{color: "white", fontSize: 18, fontFamily: 'Inter', fontWeight: '700', paddingTop: 20}}>Основная информация</label>

                <Form.Item
                    label={<label className='label' style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        textAlign: 'left',
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Название объявления</label>}
                    style={{marginTop: 20, textAlign: 'left',}}
                    name="name"
                    labelCol={{span: 9,}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 15}} // Указываем ширину для колонки с инпутом
                >
                    <Input className={styles.input} autoComplete="off" type="text"/>
                </Form.Item>

                <Form.Item
                    label={<span className='label' style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        textAlign: 'left',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>
                        Состояние
                </span>}
                    name="condition"
                    labelCol={{span: 9}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 17}} // Указываем ширину для колонки с инпутом
                >
                    <Cascader
                        className={styles.cascader}
                        style={{
                            width: 269,
                            height: 28,
                            backgroundColor: '#2D2D33',
                            borderRadius: 6,
                            border: '1px #38383B solid',
                            borderColor: "green"
                        }}
                        options={optionsCondition}
                        expandTrigger="hover"
                        displayRender={displayRender}
                        placeholder="Не выбран"
                        // onChange={onChange}
                    />
                </Form.Item>

                <label style={{
                    color: "white",
                    textAlign: 'left',
                    fontSize: 18,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    paddingTop: 20
                }}>
                    Внешний вид
                </label>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        textAlign: 'left',
                        wordWrap: 'break-word'
                    }}>
                        Фотографии  <br/> не более 8</span>}
                    name="photo"
                    labelCol={{span: 9}}
                    wrapperCol={{span: 17}}
                >
                    <Dragger style={{
                        width: 269,
                        height: 25,
                        background: '#2D2D33',
                        borderRadius: 6,
                        marginLeft: 10,
                        border: '3px #38383B dotted'
                    }} {...props}>

                        <p className="ant-upload-text" style={{
                            color: "white",
                            width: 220,
                            height: 10,
                            textAlign: 'center',
                            marginLeft: 18,
                            fontSize: 10,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                        }}>Перетащите фотографии или нажмите сюда</p>
                    </Dragger>
                </Form.Item>

                <label style={{
                    color: "white",
                    fontSize: 18,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    paddingTop: 20
                }}>Характеристики</label>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Размер</span>}
                    name="size"
                    labelCol={{span: 9}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 17}} // Указываем ширину для колонки с инпутом
                >
                    <Cascader
                        className={styles.cascader}
                        style={{
                            width: 269,
                            height: 28,
                            backgroundColor: '#2D2D33',
                            borderRadius: 6,
                            border: '1px #38383B solid',
                            borderColor: "green"
                        }}
                        options={optionsSize}
                        expandTrigger="hover"
                        displayRender={displayRender}
                        placeholder="Не выбран"
                        // onChange={onChange}
                    />
                </Form.Item>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Бренд</span>}
                    name="brand"
                    labelCol={{span: 9}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 17}} // Указываем ширину для колонки с инпутом
                >
                    <Input
                        className={styles.input}
                        autoComplete="off"
                        type="text"
                    />
                </Form.Item>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Цвет</span>}
                    name="color"
                    labelCol={{span: 9}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 17}} // Указываем ширину для колонки с инпутом
                >
                    <Cascader
                        className={styles.cascader}
                        options={optionsColor}
                        expandTrigger="hover"
                        displayRender={displayRender}
                        placeholder="Не выбран"
                        style={{width: 269, height: 28}}
                        // onChange={onChange}
                    />
                </Form.Item>
                <label style={{
                    color: "white",
                    fontSize: 18,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    paddingTop: 20
                }}>Подробности</label>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Описание объявления</span>}
                    name="description"
                    labelCol={{span: 9}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 17}} // Указываем ширину для колонки с инпутом
                >
                    <TextArea rows={1} maxLength={100} autoSize={{minRows: 3, maxRows: 5}} style={{
                        width: 269,
                        height: 74,
                        background: '#2D2D33',
                        borderRadius: 6,
                        border: '1px #38383B solid',
                        color: 'white',
                        marginLeft: 10
                    }}/>

                </Form.Item>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Цена</span>}
                    name="price"
                    className='priceStyle'
                    labelCol={{span: 9}}
                    wrapperCol={{span: 17}}
                >
                    <Input className={styles.inputStyle} style={{
                        width: 97,
                        height: 28,
                        background: '#2D2D33',
                        color: "white",
                        borderRadius: 6,
                        borderColor: 'black',
                        marginLeft: 10,
                        border: '1px #38383B solid'
                    }}
                           addonAfter={<MdCurrencyRuble style={{color: "white"}}/>}
                        // prefix="  ₽"
                    />
                </Form.Item>
                <label style={{color: "white", fontSize: 18, fontFamily: 'Inter', fontWeight: '700', paddingTop: 20}}>Информация
                    по сделке</label>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Варианты получения</span>}
                    name="option"
                    labelCol={{span: 9}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 17}} // Указываем ширину для колонки с инпутом
                >

                    <Input style={{
                        background: 'rgba(44, 182, 125, 0.25)', borderRadius: 6,
                        border: '1px #38383B solid'
                    }}

                           className={styles.inputStyle2}
                           autoComplete="off"
                           type="text"
                           addonBefore={<HomeOutlined style={{color: 'white'}}/>}
                           addonAfter={<EditOutlined style={{color: 'white', border: 'none'}}/>}
                    />
                    <span style={{
                        color: 'rgba(255, 255, 255, 0.80)',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: '400'
                    }}> + Добавить вариант</span>
                </Form.Item>

                <Form.Item
                    label={<span style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word',

                    }}>Контактный телефон</span>}
                    name="phone"
                    labelCol={{span: 9}} // Указываем ширину для колонки с лейблом
                    wrapperCol={{span: 17}} // Указываем ширину для колонки с инпутом
                >
                    <Form.Item style={{
                        width: 269,
                        height: 82,
                        background: 'rgba(114, 117, 126, 0.25)',
                        borderRadius: 10,
                        border: '1px #38383B solid'
                    }}>
                        <Input
                            style={{
                                width: 132,
                                height: 28,
                                background: 'rgba(44.92, 44.92, 51, 0.75)',
                                borderRadius: 6,
                                marginTop: 7
                            }}
                            className={styles.input}
                            autoComplete="off"
                            type="text"
                            maxLength={12}
                        />
                        <span style={{
                            width: 250,
                            color: '#FFFFFE',
                            fontSize: 10,
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            overflow: 'hidden',
                            position: 'relative',
                            left: 12,
                            lineHeight: 'normal'
                        }}>Для добавления другого телефона нужно <br/> его подтверждение в профиле аккаунта</span>
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    label={<label style={{
                        color: '#FFFFFE',
                        fontSize: 14,
                        textAlign: 'left',
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        marginRight: 20,
                        wordWrap: 'break-word'
                    }}>Способ связи</label>}
                    name="communication"
                    labelCol={{span: 9}}
                    wrapperCol={{span: 17}}
                >
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            id="custom-checkbox1"
                            checked={isChecked1}
                            onChange={handleCheckboxChange1}
                            className={styles.checkbox}/>
                        <label htmlFor="custom-checkbox" className={styles.label}
                               style={{color: "white", marginLeft: 9, marginTop: 5}}> По телефону</label>
                        <br/>
                    </div>
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            id="custom-checkbox"
                            checked={isChecked2}
                            onChange={handleCheckboxChange2}
                            className={styles.checkbox}/>
                        <label htmlFor="custom-checkbox" className={styles.label}
                               style={{color: "white", marginLeft: 9, marginTop: 9}}> В сообщениях</label>
                        <br/>

                    </div>

                </Form.Item>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button style={{
                        width: 234.50,
                        height: 37,
                        background: '#38383B',
                        borderRadius: 10,
                        border: '1px #38383B solid'
                    }}>
                        <span style={{
                            width: 190,
                            height: 18,
                            textAlign: 'center',
                            color: '#FFFFFE',
                            fontSize: 14,
                            fontFamily: 'Inter',
                            fontWeight: '500'
                        }}>Сохранить и выйти</span>
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button style={{
                        width: 234.50,
                        height: 37,
                        background: '#7E5AF0',
                        borderRadius: 10,
                        borderColor: '#7E5AF0'
                    }}>
                        <span style={{
                            width: 190,
                            height: 18,
                            textAlign: 'center',
                            color: '#FFFFFE',
                            fontSize: 14,
                            fontFamily: 'Inter',
                            fontWeight: '500'
                        }}>Опубликовать объявление</span>
                    </Button>
                </div>
            </Form>
        </main>
    );
};

export default FillingForm;