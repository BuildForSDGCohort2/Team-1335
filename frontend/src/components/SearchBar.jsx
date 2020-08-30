import React from 'react';
//import { demoData } from '../demoData';
//import {searchBox}  from './search/searchbox';

class SearchBar extends React.Component {
    constructor(){
        super();
        this.items = [
            'David',
            'Damien',
            'Sara',
            'Jane'
        ];

        this.state = {
            searchText: '',
            suggestions: []
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.renderSuggestions = this.renderSuggestions.bind(this);


    }

    handleTextChange = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ( { suggestions, searchText: value } ));

    }
   
    suggestionsSelected (value) {
        this.setState(() => ({
            searchText: value,
            suggestions: []
        }))
    }
        
     renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        } return (suggestions.map((item) => <li className="list-none ml-10" onClick={() =>this.suggestionsSelected(item)}>{item}</li>))
    } 
       

    render(){
        const { searchText } = this.state;
        return(
            <div class="w-full max-w-screen-xl mx-auto px-6 pl-4">
                <div class="flex justify-start p-4 px-3 pl-2 py-10">
                    <div class="w-full max-w-md">
                        <div class="mb-4">
                            <div class="flex shadow-md bg-white mb-1 items-center border-gray-400 border rounded-lg h-12">
                                <div class="pl-2">
                                    <svg class="fill-current text-gray-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path class="heroicon-ui"
                                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </div>
                                <input
                                    class="w-full appearance-none rounded-md placeholder-gray-400 focus:placeholder-gray-600 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                    name="search"  
                                    value={ searchText }
                                    type="text"
                                    placeholder="Enter driver's license"
                                    onChange={ this.handleTextChange }
                                />
                                
                            </div>
                            <div class="flex shadow-md bg-white flex-col">
                                   {this.renderSuggestions()}        

                            </div>                            
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchBar;