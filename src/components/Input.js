import React from 'react'
import TextField from '@material-ui/core/TextField';


export const Input = ({variant, margin, handleChange, id, label, name, autoComplete }) => {
    return (
        <div>
            <TextField
                variant={variant}
                margin={margin}
                fullWidth
                onChange={handleChange}
                id={id}
                label={label}
                name={name}
                autoComplete={autoComplete}
                autoFocus
            />
        </div>
    );
}