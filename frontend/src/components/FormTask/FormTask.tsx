import React from 'react';
import './styles.scss'

export interface FormCreateTask {
    id: string,
    label: string,
    placeholder?: string,
    type?: React.HTMLInputTypeAttribute,
    value?: string,
    disabled?: boolean,
}

interface Props {
    title: string,
    FormCreateTaskData: FormCreateTask[],
    buttonLabel: string,
    onSubmit: (e: React.SyntheticEvent) => void
}


const Form = ({ title, FormCreateTaskData, buttonLabel, onSubmit }: Props) => {
    return (
        <div className='form-wrapper'>
            <h1>{title}</h1>
            <form onSubmit={onSubmit}>
                {FormCreateTaskData.map(({
                    id,
                    label,
                    placeholder,
                    type,
                    value,
                    disabled,
                }) => {
                    return (
                        <div className='input-wrapper' key={id}>
                            <label htmlFor={id}>{label}</label>
                            <input
                                type={type}
                                id={id}
                                name={id}
                                placeholder={placeholder}
                                disabled={disabled}
                                value={value}
                            />
                        </div>
                    )
                })}
                <div className='btn-wrapper'>
                    <button>{buttonLabel}</button>
                </div>
            </form>
        </div>
    );
};

export default Form;