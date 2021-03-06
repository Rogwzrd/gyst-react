import React from 'react';
import CategoryForm from './CategoryForm';

export default class Bills extends React.Component {
    render() {
        const status = "Enter Your Bills";
        const categories = ['Rent', 'Utilities', 'Transportation',]

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {categories.map((category, i) => {
                        return <CategoryForm submit={this.props.submit}
                                             handleChange={this.props.handleChange}
                                             updateCategory={this.props.updateCategory}
                                             key={i} className={category}
                                             setValue={this.props.setValue}
                                             i={i}
                                             {...this.props}/>
                    })}
                </div>
            </div>
        );
    }
}