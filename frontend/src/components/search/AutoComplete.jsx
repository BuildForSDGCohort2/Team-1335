import React from 'react';


class SearchBox extends React.Component {
    constructor(props){
    super(props);
    this.state = {
      wikiSearchReturnValues: [],
      wikiSearchTerms: '',
      isLoading: false,
      error: null,
      returnedData: []
    }
  }

  componentDidMount(){
      fetch('frontend/src/demoData.js')
      .then(response => response.json())
      .then((results) => {
          this.setState({
            isLoading: true,
            returnedData: results
          })
      })
  }

  /* useWikiSearchEngine = (e) => {
    //if (e.key === 'Enter'){
    e.preventDefault();
    
    fetch('frontend/src/demoData.js')
    .then(response => {
        response.json().then(data => {
            this.setState({
                wikiSearchReturnValues: data
              });
              console.log(this.state.wikiSearchReturnValues);
        })
    })

    //const pointerToThis = this;

  } */

  changeWikiSearchTerms = (e) => {
    this.setState({
      WikiSearchTerms: e.target.value
    });
  }
    
    render(){
        let wikiSearchResults = [];

        for (var key3 in this.state.wikiSearchReturnValues){
            wikiSearchResults.push(
                <div class="cursor-pointer bg-white shadow-sm w-full border-gray-100 border-b hover:bg-teal-100" >
                    <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                        <div class=" w-full flex flex-col items-center">
                            <div className="w-full items-center flex"><div class="cursor-pointer bg-white shadow-sm w-full border-gray-100 border-b hover:bg-teal-100" >
                                <div class="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                    <div class="w-6 flex flex-col items-center">
            <div className="w-full items-center flex font-semibold">{this.state.wikiSearchReturnValues[key3].queryResultPageTitle}</div>
                                    </div>
                                </div>
                            </div> 
                            </div>
                        </div>
                    </div>
                </div> 
            )
        }
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
                                    className="w-full appearance-none rounded-md placeholder-gray-400 focus:placeholder-gray-600 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                                    name="search"  
                                    value={this.state.WikiSearchTerms}
                                    type="text"
                                    placeholder="Enter driver's license"
                                    onKeyPress={this.useWikiSearchEngine}
                                    onChange={this.changeWikiSearchTerms}
                                />                                
                            </div>                            
                                             {wikiSearchResults}
                        </div>
                                          
                    </div>
                </div>
            </div>
        );
    }
}
export default SearchBox;