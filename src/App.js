import "./App.css";
import Dashboard from "./components/dashboard_admin";
import StudentsAdmin from "./components/students_admin";
import InstructorAdmin from "./components/instructor_admin";
import QAOAdmin from "./components/qao_admin";
import ProgramCoordinatorAdmin from "./components/program_coordinator_admin";
import UserPermissionAdmin from "./components/userPermission_admin";
import IssueResolutionAdmin from "./components/issue_resolution_admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupCandidate from "./signup";
import ManageUser from "./components/manage_user";
import Login from "./login";
import ContactUs from "./contactUs";
import Footer from "./components/footer_admin";
import StudentSyllabus from "./components/syllabus_student";
import StudentFeedback from "./components/feedback_student";
import StudentGrade from "./components/grade_student";
import StudentDashboard from "./components/dashboard_student";
import StudentProfile from "./components/userprofile_student";
import StudentAssignment from "./components/ass_student";
import Services from "./Services";
import Homepage from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupCandidate />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/manage-user" element={<ManageUser />} />
            <Route path="/admin/student" element={<StudentsAdmin />} />
            <Route path="/admin/instructor" element={<InstructorAdmin />} />
            <Route path="/admin/qao" element={<QAOAdmin />} />
            <Route
              path="/admin/program-coordinator"
              element={<ProgramCoordinatorAdmin />}
            />
            <Route
              path="/admin/user-permission"
              element={<UserPermissionAdmin />}
            />
            <Route
              path="/admin/issue-resolution"
              element={<IssueResolutionAdmin />}
            />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/Dashboard" element={<StudentDashboard />} />
            <Route path="/Grade" element={<StudentGrade />} />
            <Route path="/Feedback" element={<StudentFeedback />} />
            <Route path="/Syllabus" element={<StudentSyllabus />} />
            <Route path="/Assignment" element={<StudentAssignment />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
