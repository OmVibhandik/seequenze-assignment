import React from "react";

function Navbar() {
  return (

     <nav class="fixed top-0 z-50 w-full bg-white">
      <div class="px-3 py-2 lg:px-5 lg:pl-10">
          <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span class="sr-only">Open sidebar</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                  </svg>
              </button>
              <a href="/" class="flex ms-2">
              <img src="https://freesvg.org/img/Logo-Logo-White-with-Black-Background.png" class="h-14" alt="Logo" />
              </a>
          </div>
          <div class="flex items-center">
              <div class="flex items-center ms-3">
                    <div className="m-2">
                        <div className="text-sm w-max h-max hover:cursor-default font-medium">Free Trail | <a className="text-xs font-light">2 days left</a></div>
                        <div className="text-xs text-orange-500 hover:cursor-pointer">Extended Free Trail</div>
                    </div>
                  <div type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"  >
                      <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                  </div>
                  <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" data-dropdown-toggle="dropdown-user" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
                  <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  </div>
              </div>
              </div>
          </div>
      </div>
      </nav>

  );
}

export default Navbar;