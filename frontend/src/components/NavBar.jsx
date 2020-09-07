import React from 'react';

class NavBar extends React.Component {
   /*  constructor(props){
        super(props);
    } */

    render(){
        return (
          <div className="shadow-xs bg-white ">
            <nav class=" container mx-auto flex items-center justify-between flex-wrap p-4">
              <div class="flex items-center flex-shrink-0 text-black mr-6">
                <span class="text-lg tracking-tight font-extrabold">Toft</span>
              </div>              
              <div className="flex flex-row justify-between items-center">
                <a
                  href="/Bell"
                  className=" font-medium text-sm block mr-4 leading-none text-gray-900 hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </a>
                <a
                  href="/Login"
                  className=" font-medium text-sm block mr-4 leading-none text-gray-900 hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>

                <div className="flex flex-row items-center">
                  {/*<img class="h-8 w-8 rounded-full mx-auto mr-1" src={`https://images.unsplash.com/photo-1580172275379-bf8077ea5b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=800&q=80`} alt="avatar"/>
                    <span className="mr-2 text-grey-800 cursor-pointer">Simon Peter</span>
                    <div className="ml-4">
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="#393e46">
                            <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                    </div>*/}
                </div>
              </div>
            </nav>
          </div>
        );
    }
}

export default NavBar;