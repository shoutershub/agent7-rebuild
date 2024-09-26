<template>
    <main class="dark:bg-gray-900 lg:ml-[105px] h-full">
      <div
        class="p-8 bg-white block sm:flex items-center justify-between dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="mb-1 w-full">
          <div class="mb-4">
            <nav class="flex mb-5" aria-label="Breadcrumb">
              <ol class="inline-flex items-center space-x-1 md:space-x-2">
                <li class="inline-flex items-center">
                  <a 
                    href="#"
                    class="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {{ $t("dashboard.header.title") }}
                  </a>
                </li>
                <span class="mx-2 text-gray-400">/</span>
  
                <li>
                  <div class="flex items-center">
                    <a
                      href="#"
                      class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                      >Billing</a
                    > 
                  </div>
                </li>
              </ol>
            </nav>
          </div>
  
          <div class="grid grid-cols-4 gap-4 mt-8">
            <section class="col-span-2">
              <div
                class="pr-4 mb-6 bg-white rounded-lg sm:pr-6 xl:pr-8 dark:bg-gray-800 xl:mb-0"
              >
                <div class="text-2xl font-bold mb-4">Subscription Plan</div>
  
                <p
                  class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"
                >
                  Switch your subscription to a different type, such as a monthly
                  plan, annual plan, or student plan. And see a list of
                  subscription plans that Flowbite offers.
                </p>
                <p class="text-sm font-semibold text-gray-900 dark:text-white">
                  Next payment of $36 (yearly) occurs on August 13, 2020.
                </p>
                <div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-3">
                  <div>
                    <router-link
                      :to="{name: 'dashboard.plans'}"
                      class="text-white bg-primary-700 hover:bg-primary-800  font-medium inline-flex justify-center items-center rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <svg
                        class="mr-2 -ml-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Change Plan
                    </router-link>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium inline-flex justify-center items-center rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Cancel Subscription
                    </a>
                  </div>
                </div>
              </div>
            </section>
    
          </div>
          <section>
              <div class="mb-6 mt-12 text-2xl font-semibold">
                <h1>Payment History</h1>
              </div>
              <div
                class="relative overflow-x-auto sm:rounded-lg border border-[#e8e8e8]"
              >
                <table
                  class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                  <thead
                    class="capitalize text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <tr>
                      <th scope="col" class="px-6 py-3">#</th>
                      <th scope="col" class="px-6 py-3">Payment method</th>
                      <th scope="col" class="px-6 py-3">Status</th>
                      <th scope="col" class="px-6 py-3">Date</th>
                      <th scope="col" class="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        #9dd09829-1ebd-4882-a9cc-03ee879a3a1b
                      </td>
                      <td class="px-6 py-4">Paypal</td>
                      <td class="px-6 py-4">
                        <span
                          class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                          >Failed</span
                        >
                      </td>
                      <td class="px-6 py-4">March 6th, 2024</td>
                      <td class="px-6 py-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View reciept</a>
                      </td>
                    </tr>
                    <tr
                      class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        #9dd09829-1ebd-4882-a9cc-03ee879a3a1b
                      </td>
  
                      <td class="px-6 py-4">Stripe</td>
                      <td class="px-6 py-4">
                        <span
                          class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                          >Success</span
                        >
                      </td>
                      <td class="px-6 py-4">March 6th, 2024</td>
                      <td class="px-6 py-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View reciept</a>
                      </td>
                    </tr>
                    <tr
                      class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        #9dd09829-1ebd-4882-a9cc-03ee879a3a1b
                      </td>
  
                      <td class="px-6 py-4">Google Pay</td>
                      <td class="px-6 py-4">
                        <span
                          class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                          >Failed</span
                        >
                      </td>
                      <td class="px-6 py-4">March 6th, 2024</td>
                      <td class="px-6 py-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View reciept</a>
                      </td>
                    </tr>
                    <tr
                      class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        #9dd09829-1ebd-4882-a9cc-03ee879a3a1b
                      </td>
  
                      <td class="px-6 py-4">Random</td>
                      <td class="px-6 py-4">
                        <span
                          class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                          >Failed</span
                        >
                      </td>
                      <td class="px-6 py-4">March 6th, 2024</td>
                      <td class="px-6 py-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View reciept</a>
                      </td>
                    </tr>
                    <tr
                      class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <td
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        #9dd09829-1ebd-4882-a9cc-03ee879a3a1b
                      </td>
  
                      <td class="px-6 py-4">Paypal</td>
                      <td class="px-6 py-4">
                        <span
                          class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300"
                          >Failed</span
                        >
                      </td>
                      <td class="px-6 py-4">March 6th, 2024</td>
                      <td class="px-6 py-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View reciept</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
        </div>
      </div>
    </main>
  </template>
  