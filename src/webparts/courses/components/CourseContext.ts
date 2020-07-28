import * as React from "react";
import { CourseProvider } from "../../../services/CourseProvider";
import { ICourseService } from "./ICourseService";
import { FormMode} from "./Courses";

export const CourseContext = React.createContext<ICourseService>({
    provider: new CourseProvider("",null),
    categories: [],
    mode: FormMode.ViewAll,
    currentItemID: 0
});

