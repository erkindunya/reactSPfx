import * as React from 'react';
import styles from './ReactDemo.module.scss';

import { CourseProvider } from "../../../services/CourseProvider";
import { ICourse } from "../../../common/ICourse";

export interface ICoursesProps {
  context: any;
}

interface ICoursesState {
  data: ICourse[];
}

export default class Courses extends React.Component<ICoursesProps, ICoursesState> {
  private provider: CourseProvider;

  constructor(props: ICoursesProps) {
    super(props);

    // Create the State
    this.state = {
      data: []
    };

    this.provider = new CourseProvider("Courses", props.context);

  }

  public componentDidMount() {
    this.provider.getItems()
      .then((items: ICourse[]) => {
        this.setState({
          data: items
        });
      })
      .catch(err => {
        console.log("Error fetching data: " + err);
        alert("Error fetching data: " + err);
      });
  }

  public render(): JSX.Element {
    return (
      <div className={styles.reactDemo}>
        <div className={styles.container}>
          <span className={styles.title}>Courses</span>
          <p className={styles.subTitle}>List of Courses</p>
          <input type="button" value=" Delete " onClick={() => {
            let items: ICourse[] = [...this.state.data];

            items.slice();

            this.setState({
              data: items
            });

          }} />
          <div className={styles.row}>
            <div className={styles.column}>
              <table>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Category</td>
                  <td>Hrs</td>
                  <td>Price</td>
                </tr>
                {
                  this.state.data.map((c: ICourse) => this.getCourseRow(c))
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private getCourseRow(c: ICourse) {
    return <tr>
      <td>{c.CourseID}</td>
      <td>{c.Title}</td>
      <td>{c.Category} </td>
      <td>{c.Duration} Hrs</td>
      <td>$ {c.Price}</td>
    </tr>;
  }
}
