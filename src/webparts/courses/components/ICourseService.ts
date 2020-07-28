import { CourseProvider } from "../../../services/CourseProvider";
import { FormMode } from "./Courses";

export interface ICourseService {
    provider: CourseProvider;
    categories: string[];
    mode: FormMode;
    currentItemID: number;
}