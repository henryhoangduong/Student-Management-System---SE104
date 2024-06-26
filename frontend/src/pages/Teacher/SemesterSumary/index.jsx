import "./SemesterSumary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faCalendarDays, faCircleCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import SideBar from "../../../layouts/Components/SideBarTeacher";
import React, { useEffect, useState } from "react";


function SemesterSumary() {

    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="attendance-content" style={{ marginLeft: 40, width: "100vw" }}>
                    <h1 className="font-medium text-3xl mt-16">Semester Result</h1>

                    <div class="relative overflow-x-auto mt-10 mr-4">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Class
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        
                                        Passed
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Rate
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        10A1
                                    </th>
                                    <td class="px-6 py-4">
                                        40
                                    </td>
                                    <td class="px-6 py-4">
                                        20
                                    </td>
                                    <td class="px-6 py-4">
                                        0,5
                                    </td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        10A2
                                    </th>
                                    <td class="px-6 py-4">
                                        40
                                    </td>
                                    <td class="px-6 py-4">
                                        30
                                    </td>
                                    <td class="px-6 py-4">
                                        0,75
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        10A3
                                    </th>
                                    <td class="px-6 py-4">
                                        40
                                    </td>
                                    <td class="px-6 py-4">
                                        36
                                    </td>
                                    <td class="px-6 py-4">
                                        0,9
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SemesterSumary;
