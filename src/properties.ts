/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

module powerbi.extensibility.visual {

    export const ganttProperties = {
        general: {
             groupTasks: <DataViewObjectPropertyIdentifier>{ objectName: "general", propertyName: "groupTasks" },
        },
        legend: {
            show: <DataViewObjectPropertyIdentifier>{ objectName: "legend", propertyName: "show" },
            position: <DataViewObjectPropertyIdentifier>{ objectName: "legend", propertyName: "position" },
            showTitle: <DataViewObjectPropertyIdentifier>{ objectName: "legend", propertyName: "showTitle" },
            titleText: <DataViewObjectPropertyIdentifier>{ objectName: "legend", propertyName: "titleText" },
            labelColor: <DataViewObjectPropertyIdentifier>{ objectName: "legend", propertyName: "labelColor" },
            fontSize: <DataViewObjectPropertyIdentifier>{ objectName: "legend", propertyName: "fontSize" },
        },
        taskLabels: {
            show: <DataViewObjectPropertyIdentifier>{ objectName: "taskLabels", propertyName: "show" },
            fill: <DataViewObjectPropertyIdentifier>{ objectName: "taskLabels", propertyName: "fill" },
            fontSize: <DataViewObjectPropertyIdentifier>{ objectName: "taskLabels", propertyName: "fontSize" },
            width: <DataViewObjectPropertyIdentifier>{ objectName: "taskLabels", propertyName: "width" }
        },
        taskCompletion: {
            show: <DataViewObjectPropertyIdentifier>{ objectName: "taskCompletion", propertyName: "show" },
            fill: <DataViewObjectPropertyIdentifier>{ objectName: "taskCompletion", propertyName: "fill" }
        },
        taskConfig: {
            fill: <DataViewObjectPropertyIdentifier>{ objectName: "taskConfig", propertyName: "fill" },
            height: <DataViewObjectPropertyIdentifier>{ objectName: "taskConfig", propertyName: "height" }
        },
        taskResource: {
            show: <DataViewObjectPropertyIdentifier>{ objectName: "taskResource", propertyName: "show" },
            fill: <DataViewObjectPropertyIdentifier>{ objectName: "taskResource", propertyName: "fill" },
            fontSize: <DataViewObjectPropertyIdentifier>{ objectName: "taskResource", propertyName: "fontSize" }
        },
        dateType: {
            type: <DataViewObjectPropertyIdentifier>{ objectName: "dateType", propertyName: "type" },
            todayColor: <DataViewObjectPropertyIdentifier>{ objectName: "dateType", propertyName: "todayColor" },
            axisColor: <DataViewObjectPropertyIdentifier>{ objectName: "dateType", propertyName: "axisColor" },
            axisTextColor: <DataViewObjectPropertyIdentifier>{ objectName: "dateType", propertyName: "axisTextColor" }
        }
    };
}
