import * as React from 'react';
import styles from './ReactDemo.module.scss';

import { ICourse } from "../../../common/ICourse";

export interface ICourseProps {
  item: ICourse
}
// <Course 
export default function Course(props: ICourseProps) : JSX.Element {
    return <div className={ styles.column }>
                { props.item.CourseID } : { props.item.Title } <br/>
                { props.item.Category } <br />
                { props.item.Technology } <br/>
                { props.item.Duration } Hrs <br/>
                { props.item.Duration } $ 
            </div>;
}
