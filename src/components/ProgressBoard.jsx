/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import Snowfall from "react-snowfall";
import ProgressBoardHeader from "./ProgressBarHeader";

// Custom component to render the profile link
const ProfileLink = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: '#0096FF', display: 'flex', alignItems: 'center' }}>
      Profile <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginLeft: '5px' }} />
    </a>
  );
};

const RedemptionStatus = ({ status  }) => {
  const style = {
    color: status === "Yes" ? 'green' : 'red',
    fontWeight: 'bold',
  };

  return <span style={style}>{status}</span>;
};




const ProgressBoard = () => {
  const columns = [
    { name: "User Name", selector: (row) => row["User Name"], sortable: true },
    {
      name: "Profile",
      selector: (row) => row["Google Cloud Skills Boost Profile URL"],
      cell: (row) => <ProfileLink url={row["Google Cloud Skills Boost Profile URL"]} />,
      sortable: false,
    },
    { name: "Status", selector: (row) => row["Profile URL Status"], sortable: true },
    {
      name: "Redemption",
      selector: (row) => row["Access Code Redemption Status"],
      cell: (row) => <RedemptionStatus status={row["Access Code Redemption Status"]} />,
      sortable: true,
    },
    { name: "Milestone", selector: (row) => row["Milestone Earned"], sortable: true },
  ];


  const data =[
    {
      "User Name": "Abhishek Adhalkar",
      "User Email": "adhalkarabhishek1@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5394702a-e58a-4c35-b6e6-51a5c04ea970",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Rahul Jagtap",
      "User Email": "rahuljagtap326@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/353e93b5-cfb9-4f2e-9d02-947bb7194af1",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Parnavi Shrawgi",
      "User Email": "parnavishrawgi@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/242cbf51-01b9-4460-a17c-adebd39763e5",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Mohit Sharma",
      "User Email": "mohit21sharma.ms@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8f7c2564-9ca2-44bb-8304-e2ec17c8beef",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "2",
      "Names of Completed Skill Badges": "Prompt Design in Vertex AI [Skill Badge] | The Basics of Google Cloud Compute [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shruti Mundhe",
      "User Email": "shrutimundhe22@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/af062348-84ff-41aa-992b-2e5d68667d70",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vincent MEINDL",
      "User Email": "vincent.meindl@atos.net",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/79fb9859-c8e1-4a23-82b4-e90a346118d7",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "3",
      "Names of Completed Skill Badges": "Monitor Environments with Google Cloud Managed Service for Prometheus [Skill Badge] | Monitor and Log with Google Cloud Observability [Skill Badge] | Implement DevOps Workflows in Google Cloud [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gaurav Ghatol",
      "User Email": "ghatolgaurav150@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7fa9347a-60ad-4263-88d7-f977ab5ff328",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "36",
      "Names of Completed Skill Badges": "Prompt Design in Vertex AI [Skill Badge] | Explore Generative AI with the Vertex AI Gemini API [Skill Badge] | Using the Google Cloud Speech API [Skill Badge] | Use APIs to Work with Cloud Storage [Skill Badge] | The Basics of Google Cloud Compute [Skill Badge] | Tag and Discover BigLake Data [Skill Badge] | Streaming Analytics into BigQuery [Skill Badge] | Secure BigLake Data [Skill Badge] | Monitor and Log with Google Cloud Observability [Skill Badge] | Networking Fundamentals on Google Cloud [Skill Badge] | Monitoring in Google Cloud [Skill Badge] | Integrate BigQuery Data and Google Workspace using Apps Script [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Eventarc [Skill Badge] | Get Started with Dataplex [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Create a Streaming Data Lake on Cloud Storage [Skill Badge] | Create a Secure Data Lake on Cloud Storage [Skill Badge] | Configure Service Accounts and IAM Roles for Google Cloud [Skill Badge] | Cloud Functions: 3 Ways [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Analyze Sentiment with Natural Language API [Skill Badge] | Get Started with API Gateway [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Command Line [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Console [Skill Badge] | Monitor and Manage Google Cloud Resources [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | Get Started with Looker [Skill Badge] | Set Up an App Dev Environment on Google Cloud [Skill Badge] | App Building with AppSheet [Skill Badge] | Analyze Speech and Language with Google APIs [Skill Badge] | Analyze Images with the Cloud Vision API [Skill Badge] | Analyze BigQuery Data in Connected Sheets [Skill Badge] | Use Machine Learning APIs on Google Cloud [Skill Badge] | Build a Data Warehouse with BigQuery [Skill Badge] | Derive Insights from BigQuery Data [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sakshi Dadgal",
      "User Email": "dadgalsakshi@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3fec25a6-6220-4a7f-9b63-6d40fc8e3947",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vishal farpat",
      "User Email": "vishalfarpat@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d1fcb9bf-1832-414f-8001-464c908abdea",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sagar Palhade",
      "User Email": "saggypalhade@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a98ea6f9-d840-4d16-8aef-de37c0b67260",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "34",
      "Names of Completed Skill Badges": "Prompt Design in Vertex AI [Skill Badge] | Use Functions, Formulas, and Charts in Google Sheets [Skill Badge] | Using the Google Cloud Speech API [Skill Badge] | Use APIs to Work with Cloud Storage [Skill Badge] | The Basics of Google Cloud Compute [Skill Badge] | Tag and Discover BigLake Data [Skill Badge] | Secure BigLake Data [Skill Badge] | Networking Fundamentals on Google Cloud [Skill Badge] | Monitoring in Google Cloud [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Eventarc [Skill Badge] | Get Started with Dataplex [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Implement DevOps Workflows in Google Cloud [Skill Badge] | Create a Streaming Data Lake on Cloud Storage [Skill Badge] | Create a Secure Data Lake on Cloud Storage [Skill Badge] | Cloud Functions: 3 Ways [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Analyze Sentiment with Natural Language API [Skill Badge] | Get Started with API Gateway [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Command Line [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Console [Skill Badge] | Monitor and Manage Google Cloud Resources [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | Get Started with Looker [Skill Badge] | Set Up an App Dev Environment on Google Cloud [Skill Badge] | Build Infrastructure with Terraform on Google Cloud [Skill Badge] | App Building with AppSheet [Skill Badge] | Analyze Speech and Language with Google APIs [Skill Badge] | Analyze Images with the Cloud Vision API [Skill Badge] | Analyze BigQuery Data in Connected Sheets [Skill Badge] | Prepare Data for ML APIs on Google Cloud [Skill Badge] | Derive Insights from BigQuery Data [Skill Badge] | Build Real World AI Applications with Gemini and Imagen [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Aditya@040204",
      "User Email": "adityakulkarniseven@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/444a92c6-e3eb-488c-9754-afe092ce3886",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "17",
      "Names of Completed Skill Badges": "The Basics of Google Cloud Compute [Skill Badge] | Streaming Analytics into BigQuery [Skill Badge] | Secure BigLake Data [Skill Badge] | Networking Fundamentals on Google Cloud [Skill Badge] | Monitoring in Google Cloud [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Dataplex [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Cloud Functions: 3 Ways [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Get Started with API Gateway [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Command Line [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Console [Skill Badge] | Monitor and Manage Google Cloud Resources [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | App Building with AppSheet [Skill Badge] | Analyze Images with the Cloud Vision API [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Laxmi Moharana",
      "User Email": "priyalaxmi1624@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/40b46558-ed65-44c7-87c3-6309e9393637",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Prajwal Kathole",
      "User Email": "prajwalkathole02@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e65c9330-0889-4a1d-99a1-8ba1a74aadab",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Janhavi Kolhe",
      "User Email": "jkolhe407@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5a6ee937-a380-4e00-ab95-07aec3106019",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gauri Patil",
      "User Email": "patilgauri0531@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8fcf001e-49e2-42e5-a677-0c8a06ef903d",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "9",
      "Names of Completed Skill Badges": "The Basics of Google Cloud Compute [Skill Badge] | Secure BigLake Data [Skill Badge] | Monitor and Log with Google Cloud Observability [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Cloud Speech API: 3 Ways [Skill Badge] | Cloud Functions: 3 Ways [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Get Started with API Gateway [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Ruchita Ghate",
      "User Email": "ruchitaghate22@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7178fe5d-6892-4351-9961-39fcb67ac469",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gargee Shekokar",
      "User Email": "gargi4283@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1fe09701-fc98-40fa-8644-979357e778a3",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Swayam Kolhe",
      "User Email": "swayamkolhe247@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/19d88711-300e-4025-ba33-0142a11b567e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Om polkat",
      "User Email": "polkatom97@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2d52bf95-b196-47af-890d-526c06600773",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "2",
      "Names of Completed Skill Badges": "Implement Load Balancing on Compute Engine [Skill Badge] | Set Up an App Dev Environment on Google Cloud [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vedant ganesh",
      "User Email": "vedantganesh7@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/591d26d7-294f-4409-802c-8b39ea6fccbe",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "2",
      "Names of Completed Skill Badges": "The Basics of Google Cloud Compute [Skill Badge] | Get Started with Pub/Sub [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sushant Fokmare",
      "User Email": "sushantfokmare16@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/46c3bcc5-2e13-40dc-b594-af735065f0dd",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "12",
      "Names of Completed Skill Badges": "Using the Google Cloud Speech API [Skill Badge] | The Basics of Google Cloud Compute [Skill Badge] | Monitor and Log with Google Cloud Observability [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Cloud Speech API: 3 Ways [Skill Badge] | Cloud Functions: 3 Ways [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Analyze Sentiment with Natural Language API [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | Derive Insights from BigQuery Data [Skill Badge] | Build Real World AI Applications with Gemini and Imagen [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "DEWANG BHONDE",
      "User Email": "dewangbhonde07@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/406dc8e3-f299-4f49-90d3-e3f7691a0d4f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "10",
      "Names of Completed Skill Badges": "The Basics of Google Cloud Compute [Skill Badge] | Secure BigLake Data [Skill Badge] | Networking Fundamentals on Google Cloud [Skill Badge] | Monitoring in Google Cloud [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Dataplex [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Cloud Speech API: 3 Ways [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Get Started with API Gateway [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sanika Jumale",
      "User Email": "sanikajumale52@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/604e37c3-1ea3-40a2-bf4f-ef9b27d96699",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vasundhara Deshmukh",
      "User Email": "deshmukhvasundhara424@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/0fadbce7-54c2-466b-af8a-d9f78a673145",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Om Hurpade",
      "User Email": "omhurpade9@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/33e6484e-7613-4964-bf59-7fa38a4e2484",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "21",
      "Names of Completed Skill Badges": "Use Functions, Formulas, and Charts in Google Sheets [Skill Badge] | The Basics of Google Cloud Compute [Skill Badge] | Streaming Analytics into BigQuery [Skill Badge] | Implement DevOps Workflows in Google Cloud [Skill Badge] | Cloud Functions: 3 Ways [Skill Badge] | Automate Data Capture at Scale with Document AI [Skill Badge] | Deploy Kubernetes Applications on Google Cloud [Skill Badge] | Get Started with API Gateway [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Command Line [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Console [Skill Badge] | Share Data Using Google Data Cloud [Skill Badge] | Monitor and Manage Google Cloud Resources [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | Get Started with Looker [Skill Badge] | Set Up an App Dev Environment on Google Cloud [Skill Badge] | App Building with AppSheet [Skill Badge] | Use Machine Learning APIs on Google Cloud [Skill Badge] | Prepare Data for Looker Dashboards and Reports [Skill Badge] | Develop your Google Cloud Network [Skill Badge] | Build a Data Warehouse with BigQuery [Skill Badge] | Derive Insights from BigQuery Data [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Fatima Zaki",
      "User Email": "fatimaazakii18@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ebe3bc90-7178-4153-9467-45905c01e034",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Amit wankhade",
      "User Email": "amitwankhade80@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/6110f388-73b2-4708-a394-e87331987c91",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Ruhi Mate",
      "User Email": "materuhi772@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/17c68a0f-29f2-4877-909f-f1d7f800abde",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Simrankaur Chavan",
      "User Email": "simrankour.chavan@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/0ed2dd76-2ecf-4c63-b0a8-f9ed0fde2687",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "5",
      "Names of Completed Skill Badges": "Store, Process, and Manage Data on Google Cloud - Command Line [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Console [Skill Badge] | Monitor and Manage Google Cloud Resources [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | Build a Data Warehouse with BigQuery [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Amardeepsingh Chavan",
      "User Email": "amardeepsinghchavan4@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3e560a34-69df-4978-a544-b34346054392",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "4",
      "Names of Completed Skill Badges": "Store, Process, and Manage Data on Google Cloud - Console [Skill Badge] | Monitor and Manage Google Cloud Resources [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | Set Up an App Dev Environment on Google Cloud [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shantanu Patil",
      "User Email": "patilshantanu08@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5139c509-e93e-457f-84f4-dd8e260a89e6",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Saurabh Gaikwad",
      "User Email": "saurabhkg36@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1e1485c6-2af4-4e66-bc14-de8d2d40fa99",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gauri Sambare",
      "User Email": "gaurisambare13@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b9a38341-e20b-4a0a-b605-a38efd62d76f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Devesh Badgujar",
      "User Email": "badgujardevesh25@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/0d36c277-04c6-4192-9dec-bc67fed1243a",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shraddha Kaple",
      "User Email": "shraddhakaple09@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/96998c8c-e457-4d81-ac89-13b25782beef",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Piyush Chavan",
      "User Email": "piyushchavan1292002@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/deb8cbf5-7b7f-44b4-a1bd-8530b60f0b15",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sakshi Bhagat",
      "User Email": "sakshibhagat8390@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8a320d4d-a345-4e36-a4e3-b37b9f58e1f0",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sakshi Palaskar",
      "User Email": "sakshipalaskar04@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/6019b281-6825-4f14-a600-53eeb7169588",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Rutuja Dalal",
      "User Email": "rutujadalal1@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/96883106-ca94-433f-bbaa-a432f17fa1c7",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Mohan Gawande",
      "User Email": "mohangawande2410@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/74b057fb-457c-4470-b7e4-b66c78bdf511",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Hrushikesh Shekharwar",
      "User Email": "hrushikeshshekharwar51@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9f1415ef-2e65-46ba-a2ee-bde76a8bb527",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Aditya Dhengre",
      "User Email": "adityadhengre0012@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d6e9b4c5-d31c-4a5c-a52f-5a22003cc89c",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "2",
      "Names of Completed Skill Badges": "Monitor and Log with Google Cloud Observability [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Kunal Chaudhari",
      "User Email": "chaudharikunal195@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d62a0fe9-ca80-4bb9-b116-d6f96f80597e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gaurav Wagadre",
      "User Email": "wagadreg267@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/827a2997-e764-4a53-b89a-ece84398324f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Abhishek Patil",
      "User Email": "abhi2003patil@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ceae714b-804c-45f5-bc8e-a2b52dfeb09e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Nitish Sonone",
      "User Email": "nitishsonone452@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2ffc48cb-db57-4841-9668-6527bee81a5d",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shruti Kashikar",
      "User Email": "shrutikashikar2704@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4001ba2a-af76-4dd9-b97e-9415edd179db",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Nikhil khandare",
      "User Email": "nikhilkhandare2002@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d93eed2a-5178-4e9e-be06-c7c65dd02dd6",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Lokesh Bandurkar",
      "User Email": "lokeshdan770@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8950fdd6-e9c6-42be-9606-9b0a754a2f9f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Abhishek Dhoran",
      "User Email": "avdhoran11@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a75a7bf5-50db-4031-89c3-e10338fbd417",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "arihara suthan.l.k",
      "User Email": "ariharasuthan177@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/6037c41f-7088-4242-8242-cfa9e53648a0",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Nikita Warade",
      "User Email": "nikitawarade86@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/dbe621bb-b8c0-46e2-8935-720c2c8aaf57",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Samruddhi Bhakare",
      "User Email": "samruddhibhakare2020@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c9ec57bd-80bb-4969-a14b-dda83a7f4b06",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Ishwari Nikam",
      "User Email": "ishwaripnikam@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3dd545cb-7759-437c-b0e2-d00e7447d35e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sakshi Huse",
      "User Email": "sakshihuse24@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/826f34d6-9343-4e58-9242-ee1284ee111c",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Tejaswini Bhagat",
      "User Email": "tejaswinibhagat4@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/cf49b3cf-8623-4daf-9482-879694a7b432",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Mukund Deshmukh",
      "User Email": "mukunddeahmukh432@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/81a6b584-ab6a-455e-af78-6ebc95dde5f4",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Chandan Karnani",
      "User Email": "karnanichandan@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2b0e8fc9-0aac-4cc7-9fe2-f336a600b97c",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gaurav Chavan",
      "User Email": "gauravchavan1104@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/acb7a3e1-cab0-4ff2-8edd-e9c2255dd579",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Samruddhi Tathe",
      "User Email": "samutathe23@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e5df75db-3fa8-4c3e-9cdc-97ac85d6c76d",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "SHIVRAJ VIJEKAR",
      "User Email": "shivrajvijekar03@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7ad05aa6-4067-458b-94a0-1ca58c4d347b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Muhammad Akhter",
      "User Email": "projects.umair@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8ddc0f33-6cf4-4b32-aa18-1a5872d97e4b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vaishnavi Bhivate",
      "User Email": "bhivatevaishnavi9@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/f454e620-5afb-4629-b221-33b62bb693c9",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Pranjali Damdhar",
      "User Email": "pranjalidamdhar30@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/301d6dcb-b899-48e3-a21e-9fa75bc5c019",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sarthak Raut",
      "User Email": "sarthak31122002@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/4174bbfc-0f6b-4d83-88f4-819d8177dc73",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Samarth Dike",
      "User Email": "samarthdike248@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5a497c97-48ec-47c4-9ea1-dde6efadf42e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Jatin Verma",
      "User Email": "ab.74207@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e04ab06b-1b9a-4920-9d48-1a41dcd5c2f6",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Swathika Eakambaram",
      "User Email": "programs1315@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/f21a3887-9274-445e-8ef8-e328aafa3fd5",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "18",
      "Names of Completed Skill Badges": "Manage Kubernetes in Google Cloud [Skill Badge] | Using the Google Cloud Speech API [Skill Badge] | Use APIs to Work with Cloud Storage [Skill Badge] | Tag and Discover BigLake Data [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Create a Secure Data Lake on Cloud Storage [Skill Badge] | Cloud Speech API: 3 Ways [Skill Badge] | Get Started with Google Workspace Tools [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Analyze Sentiment with Natural Language API [Skill Badge] | Get Started with API Gateway [Skill Badge] | Set Up an App Dev Environment on Google Cloud [Skill Badge] | App Building with AppSheet [Skill Badge] | Analyze Speech and Language with Google APIs [Skill Badge] | Analyze Images with the Cloud Vision API [Skill Badge] | Analyze BigQuery Data in Connected Sheets [Skill Badge] | Build Real World AI Applications with Gemini and Imagen [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "shambhu chavan",
      "User Email": "shambhuchavan23@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/91919fb7-2d6a-43a3-9a48-8924da75e9fc",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gitesh Uttarwar",
      "User Email": "uttarwargitesh@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ebcbcebc-7a01-431b-b8b5-71cbca17532c",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Divya Hutke",
      "User Email": "divyahutke@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/37a67315-02ff-40a7-a87c-d2d6f64d6942",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "SAVVIDHAN GAIKWAD",
      "User Email": "gaikwadsavvidhan@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a9adc928-cf45-4388-b3b8-77912138ffdc",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "16",
      "Names of Completed Skill Badges": "Prompt Design in Vertex AI [Skill Badge] | The Basics of Google Cloud Compute [Skill Badge] | Secure BigLake Data [Skill Badge] | Networking Fundamentals on Google Cloud [Skill Badge] | Monitoring in Google Cloud [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | App Engine: 3 Ways [Skill Badge] | Get Started with API Gateway [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Command Line [Skill Badge] | Store, Process, and Manage Data on Google Cloud - Console [Skill Badge] | Monitor and Manage Google Cloud Resources [Skill Badge] | Get Started with Looker [Skill Badge] | App Building with AppSheet [Skill Badge] | Analyze Images with the Cloud Vision API [Skill Badge] | Analyze BigQuery Data in Connected Sheets [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Manasvi Jangid",
      "User Email": "manasvijangid21@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5e82f1b6-b726-4629-b65e-c28d025d9c0a",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Chaitali Nakhate",
      "User Email": "chaitalinakhate20@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2675938c-4270-4f31-8bff-de5d29b5e4c4",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Tina Chinchole",
      "User Email": "purvachinchole176@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/bfa1fe3e-7c54-473b-a065-1f3e415d814b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Bhumika Pimpalshende",
      "User Email": "bhumikapimpalshende21@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/196d08f9-c3c2-4f2e-be78-16c233718c97",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gaurav sharma",
      "User Email": "gauravpolast512@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/a191c774-fe80-42a3-baff-f37dcc07789a",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sagar Palhade",
      "User Email": "sagarpalhadesp@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9ae34e48-2bde-47d1-b6bc-bdcb4e2e3bb5",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "1",
      "Names of Completed Skill Badges": "Analyze BigQuery Data in Connected Sheets [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sagar Palhade",
      "User Email": "ssaggy2442@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ffb8ab27-1b1f-4327-ac19-331cc260fad4",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Prathamesh Mahalle",
      "User Email": "prathameshd860@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ae4e26be-ca7b-430e-8f52-5b7f34b439f9",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Kartik Dhande",
      "User Email": "kartikpatil0936@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/9e0e4a5d-abed-46b8-8174-d228f26236f8",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shreya Katole",
      "User Email": "shreyakatole02@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/abbfb034-a48d-4eec-88e5-a916cacd524d",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Om Khandre",
      "User Email": "omkhandre18@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/6db23678-3f74-4017-9acc-76aa50366255",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Priyanka Tawari",
      "User Email": "pkamalkishortawar@deloitte.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ca53b249-3f10-48b8-91a5-4adcee130544",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Muhammad Khan",
      "User Email": "muhammadnaimatullahkhan99@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/20596711-a27d-403e-892a-cff14a21b599",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "4",
      "Names of Completed Skill Badges": "Build a Secure Google Cloud Network [Skill Badge] | Implement Load Balancing on Compute Engine [Skill Badge] | Set Up an App Dev Environment on Google Cloud [Skill Badge] | Prepare Data for ML APIs on Google Cloud [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Ayush Moon",
      "User Email": "m39657234@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2a818df8-1f01-4947-9c19-497a9306671e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Md Mohiuddin",
      "User Email": "waseelcode@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d8f870e4-d023-4c37-a3ae-28833c0e273d",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Aditya Kulkarni",
      "User Email": "adityakulkarnihello@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/bcf682c1-dea2-4a4f-a17b-1cdcc721bbfa",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vaishnavi Dadgal",
      "User Email": "dadgalvaishnavi@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/38063b7c-0678-4424-acab-3fdad864c801",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Neha Tayade",
      "User Email": "nehatayade2114@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/18ad9056-77c9-4908-92cc-29702e4df689",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gauri Malekar",
      "User Email": "gaurimalekar56@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/655d6424-89b7-4ae3-83eb-9224774c0bfe",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Kalpak Waghmare",
      "User Email": "kalpakwaghmare2301@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/553fccdc-9ced-4404-8870-4f41f63e37d2",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "1",
      "Names of Completed Skill Badges": "The Basics of Google Cloud Compute [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vedanti Polkat",
      "User Email": "polkatvedanti5@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ba608aac-21aa-47e9-87bc-bf6aadd5f658",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "3",
      "Names of Completed Skill Badges": "Manage Kubernetes in Google Cloud [Skill Badge] | Monitor Environments with Google Cloud Managed Service for Prometheus [Skill Badge] | The Basics of Google Cloud Compute [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Dikshant",
      "User Email": "dikshantkamboj555@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/d28bd6bb-0255-4611-855e-5488a8adc266",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gauri Pakhare",
      "User Email": "gauripakhare2005@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/149bade7-549c-4959-9340-68980d7fe5e2",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Garv walia",
      "User Email": "garv.w05@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7d0dab33-790f-4207-bfc3-0f562d391fd9",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Kanchan Khond",
      "User Email": "kanchankhond23@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3d9ffdfb-4023-4d68-aa7a-083b35c63c80",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sanika Deshmukh",
      "User Email": "sanikadeshmukh031@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c00faa2b-6ed7-412f-9ea5-3a9f0be98b45",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Bhakti Deshmukh",
      "User Email": "deshmukhbhakti1289@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/cf07b423-70cd-4da9-9a2c-26ff6818abd7",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Kuppam Johari",
      "User Email": "kuppamjohari@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e0f522b9-cd86-4353-8f61-9abdd9222494",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "PRATIK WANKHADE",
      "User Email": "pratikawankhade91@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e7d9c61b-839f-4828-b6c5-322c07cc441f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Khushi Lokhande",
      "User Email": "khushilokhande457@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/20b0e1b7-4cc7-48fc-a6db-c93c215efad9",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Tanuja Gadam",
      "User Email": "tanujagadam7@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/5f65b8f5-3081-4a77-b199-27edb290ae9b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sharayu Ingle",
      "User Email": "sharayuingle28@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1e6a6f78-8411-43cf-956c-e505d099c37f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vikas Gawade",
      "User Email": "gawadevikas36@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/f77fa7a8-ed4a-4e71-97a0-2f03b7a2816b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Rushi Sharma",
      "User Email": "rushisharma82@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/660d45c6-2b57-4fe5-8f4e-40f3af09c05c",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Krushnagopal Agnihotri",
      "User Email": "agnihotrikrushnagopal@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/43d01f67-641a-4f1d-b618-b84728ba038c",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Om Deshmukh",
      "User Email": "omdeshmukh453@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8f1fbd73-9c00-486d-8272-8e1d85d84e56",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Girish Sonune",
      "User Email": "girish.sonune@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b1c8d909-1857-49a7-a027-852a132cd122",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Girish Sonune",
      "User Email": "sonunegirish@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/78558fda-3703-479a-88a9-134dece3bd48",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Yash Atole",
      "User Email": "mryashatole@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/14a04d5c-1092-486a-957b-c6a79c5cd953",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Pranita Tondre",
      "User Email": "pranitatondre@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2f32c6d0-92b4-48bd-ac44-1a3ae9267248",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vaishnavi Ghyar",
      "User Email": "vsg4109@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b3d5a9c7-8436-4d88-9917-5f783c6d24c7",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vaishnavi deshmukh",
      "User Email": "deshmukhvaishnavi2409@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/787cb326-b633-4fbc-9681-d15156770dbe",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "rayyan ansari",
      "User Email": "rayyanshajiansari@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8421bf56-9d3b-4748-a0af-70299808baf4",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sneha jadhal",
      "User Email": "snehajadhal0801@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c67d81fd-a192-4e0b-9cb6-6437ef9a79ed",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Prarthana Kale",
      "User Email": "prarthanarkale30@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/e0d69d13-537f-4343-bd14-3e98008db962",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vedant Nagpure",
      "User Email": "nagpurev48@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/683b7db0-5839-402d-bc37-147d5cb88889",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Ajay Harle",
      "User Email": "krushnaharle57@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b70bd6ce-2ee0-430c-9354-d6592eb47b02",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Siddhartha Wankhede",
      "User Email": "yashwantchavan408@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/92beccae-bb25-48cf-b0bd-f8d32f948680",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Vaishnavi Wankhede",
      "User Email": "anilwankhede033@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/97f88807-d1a7-4c68-93e9-04d5da5324ad",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Saurabh Wankhede",
      "User Email": "saurabh.wankhede.career@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/22debb4c-9101-4b82-8697-61da48c6744f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "9",
      "Names of Completed Skill Badges": "The Basics of Google Cloud Compute [Skill Badge] | Networking Fundamentals on Google Cloud [Skill Badge] | Monitoring in Google Cloud [Skill Badge] | Get Started with Pub/Sub [Skill Badge] | Get Started with Dataplex [Skill Badge] | Get Started with Cloud Storage [Skill Badge] | Get Started with API Gateway [Skill Badge] | Get Started with Looker [Skill Badge] | Analyze Images with the Cloud Vision API [Skill Badge]",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Aishwarya Wankhede",
      "User Email": "saregamapamusic30@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/ec01bfeb-37e0-4a97-be01-9c1b40c6b218",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Aditya Tak",
      "User Email": "adityatak0301@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c87b6c45-468b-4cfc-aa9b-66139a02ec98",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Anagha Badhe",
      "User Email": "anaghabadhe012004@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/46a07885-d676-44f1-afd5-357c7295433b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Pragna Yanduri",
      "User Email": "incognitomortal4@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/76af42e3-626c-4e81-a121-53d5bf5f01f5",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Lisa carpenter",
      "User Email": "lcarpenter87@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7c75ce1a-f3a0-4fb3-b92e-c20b1665e412",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shantanu Dongare",
      "User Email": "shantanudongre42@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/f9ff4959-8698-47c6-b472-c3a8e47421f6",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "gowtham reddy",
      "User Email": "gowtham5.gr15@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/af08c42f-76c5-440a-a1a4-223d9de55fa0",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Kalyani Gadekar",
      "User Email": "kalyanigadekar2004@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/977462f1-4a90-4455-a1d5-39cb3d532678",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Anushka Bhuskat",
      "User Email": "anu.bhuskat@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/8282a8ba-2856-4937-add4-a4f47bcfc77b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shruti Bedarkar",
      "User Email": "shrutibedarkar767@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/2a1177ee-9034-4c61-8a24-312d162871d4",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Darshana Pagrut",
      "User Email": "darshanapagrut17@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/1419de1d-37cc-43ae-b9f3-b10d1f9f684e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gayatri Rode",
      "User Email": "gayatrirode98@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/588f4ca3-9b3c-47ec-9b50-89a68339fd23",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Shreyash Dalal",
      "User Email": "shreyashd1522@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/44b2d3d6-c32d-44cc-9d0e-3f0fe9a50d4b",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Amol Gawade",
      "User Email": "gawadeasha74@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3b4a8119-4ea9-4e18-a33c-c57c57d77763",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Atharva Bodade",
      "User Email": "atharvabodade@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/689eccba-fca9-4b28-b97c-4c915b6171a6",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Samiksha chendalne",
      "User Email": "samikshachendalne@gamil.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/b40e6e36-be51-4701-9a7a-22cb52879f2e",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Yash Raut",
      "User Email": "rauty207@gmal.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/7b439ed9-74ec-4be9-a625-eb40d6300797",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Karan kakar",
      "User Email": "karanpatil252005@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/726b5e0b-df73-494f-8139-3fb88543b50f",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sapana Sultane",
      "User Email": "sultanesapna@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/c746ea3a-1f55-41bb-92b8-6728ba2a61ac",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Gargee Shekokar",
      "User Email": "gargish244@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/98fcd90e-0e55-4b26-bd7b-63ae62e6b1af",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Sanket Agade",
      "User Email": "sanketagade807@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/899352aa-440b-4fc7-b4c5-4fe8925d5d25",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "APEKSHA SARODE",
      "User Email": "appu.sarode028@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/3e43e280-c3cb-4be7-a97e-1044f6ddf26d",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "No",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Nikhil mahale",
      "User Email": "pmahale451@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/da28bc0c-2e82-4324-8716-3356771e1d0d",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    },
    {
      "User Name": "Renuka Gorve",
      "User Email": "renukagorve2@gmail.com",
      "Google Cloud Skills Boost Profile URL": "https://www.cloudskillsboost.google/public_profiles/fc158fd2-9b1a-4c05-b0c6-762f10d3311a",
      "Profile URL Status": "All Good",
      "Access Code Redemption Status": "Yes",
      "Milestone Earned": "None",
      "# of Skill Badges Completed": "0",
      "# of Arcade Games Completed": "0",
      "# of Trivia Games Completed": "0"
    }
  ]

  
  const dataLength = data.length;
  console.log(dataLength);
  

  return (
    <>
      <Snowfall />
      <ProgressBoardHeader dataLength={dataLength} />
      <div className="flex justify-center items-center min-h-screen bg-[#12141f] p-4">
        <div className="data-table-container w-full max-w-4xl">
          <DataTable
            columns={columns}
            data={data}
            responsive
            defaultSortField="User Name" // Specify the default column to sort
            defaultSortAsc={true} // Specify the default sorting order
          />
        </div>
      </div>
    </>
  );
};

export default ProgressBoard;