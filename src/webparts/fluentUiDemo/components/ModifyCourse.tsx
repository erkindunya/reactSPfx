import * as React from "react";

import { ICourse } from "../../../common/ICourse";
import { CourseProvider } from "../../../services/CourseProvider";

import { Fabric, Label, TextField, Dropdown,IDropdownOption, DefaultButton,PrimaryButton,ITextField,IDropdownProps } from "office-ui-fabric-react";

export interface IModifyCourseProps {
    onCancel? : ()=>void,
    onSaved? : ()=>void,
    categories: string[];
    id: number;
    provider: CourseProvider;
}

export function ModifyCourse(props: IModifyCourseProps) : JSX.Element {
    let [options, setOptions] = React.useState<IDropdownOption[]>();
    let [flag,setFlag] = React.useState<boolean>(false);

    let refs =  {
        CourseID: React.useRef<ITextField>(),
        Category: React.useRef<IDropdownProps>(),
        Title: React.useRef<ITextField>(),
        Description: React.useRef<ITextField>(),
        Technology: React.useRef<ITextField>(),
        Duration: React.useRef<ITextField>(),
        Price: React.useRef<ITextField>()
    };

    let eTag: string  = "";

    React.useEffect(() => {
        // CreateDropdown Options
        let opt :IDropdownOption[] = props.categories.map((p:string) =>{
            return {
                key: p,
                text:p
            }
        });
        
        setOptions(opt);
        setFlag(true);

        // Fetch and populate form
        props.provider.getItemById(props.id).then((c: ICourse) => {
            refs.CourseID.current.value=c.CourseID.toString();
            refs.Title.current.value=c.Title;
            refs.Description.current.value=c.Description;
            refs.Technology.current.value=c.Technology;
            refs.Category.current.selectedKey=c.Category;
            refs.Duration.current.value=c.Duration.toString();
            refs.Price.current.value=c.Price.toString();
            eTag=c["odata.etag"];

        }).catch(err=> {
            alert("Unable to populat edit form!");
            props.onCancel();
            return;
        });

    },[flag]);


    return <Fabric>
            
            <TextField label="Course ID: " componentRef={ refs.CourseID } /><br/>
            <TextField label="Course Name: " componentRef={ refs.Title } /><br/>
            <TextField label="Description: " componentRef={ refs.Description } multiline rows={ 5 } resizable /><br/>
           
            <Dropdown options={ options } label="Category: " multiSelect={ false }>
                {
                    props.categories.map((c: string) => <option value={ c }>{c}</option>)
                }
            </Dropdown><br/>

            <TextField label="Technology: " componentRef={ refs.Technology } /><br/>          
            <TextField label="Duration: " componentRef={ refs.Duration }/><br/>
            <TextField label="Price: " componentRef={ refs.Price } /><br/>

            <PrimaryButton text="Save" onClick={ () => {
                // Validations come here

                if(confirm("Update this Course?")) {
                   props.provider.updateItem(props.id, {
                        CourseID: parseInt(refs.CourseID.current.value),
                        Title:refs.Title.current.value,
                        Description: refs.Description.current.value,
                        Category:refs.Category.current.selectedKey,
                        Technology: refs.Technology.current.value,
                        Duration: parseInt(refs.Duration.current.value),
                        Price:parseFloat(refs.Price.current.value)
                    } as ICourse, eTag).then(()=> {
                        alert("Item Updated!");
                        props.onSaved();
                    });
                }
            }} />&nbsp;
            <DefaultButton text=" Cancel " onClick={ ()=> props.onCancel() } />
       </Fabric>;
}