import React from "react";


const Form = (props) => {

    const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        props.change(name, valueToUse)
      }
      const onSubmit = evt => {
        evt.preventDefault()
        props.submit()
      }

    return (
        <div>
            <form id="pizza-form" onSubmit={onSubmit}>

        {/* VALIDATION ERRORS */}
        <div>{props.errors.name}</div>

        {/* TEXT INPUTS */}

                <label>Name:
                <input
                    id="name-input"
                    name='name'
                    value={props.values.name}
                    type='text'
                    onChange={onChange}
                    />
                </label>
                <label>Pizza size
                    <select
                        onChange={onChange}
                        value={props.values.size}
                        name='size'
                        id="size-dropdown"
                        >
                        <option value=''>- Select an option -</option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                    </select>
                        </label>
                    <label>Pepperoni
                        <input
                            type="checkbox"
                            name="pepperoni"
                            onChange={onChange}
                            checked={props.values.topping}
                        />
                        </label>

                        <label>Cheese
                        <input
                            type="checkbox"
                            name="cheese"
                            onChange={onChange}
                            checked={props.values.topping}
                        />
                        </label>

                        <label>Sausage
                        <input
                            type="checkbox"
                            name="sausage"
                            onChange={onChange}
                            checked={props.values.topping}
                        />
                        </label>
                                
                        <label>Bacon
                        <input
                            type="checkbox"
                            name="bacon"
                            onChange={onChange}
                            checked={props.values.topping}
                        />
                        </label>
                        <label>Special Instructions:
                        <input
                            id="special-text"
                            name='special'
                            value={props.values.special}
                            type='text'
                            onChange={onChange}
                            />
                        </label>
                        <button id="order-button" onSubmit={onSubmit}>Submit</button>
                            </form>
                        </div>
    )
}

export default Form