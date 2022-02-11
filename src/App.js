import React from "react";
import CustomPDFViewer from "./ui-components/CustomPDFViewer";
import styled from "styled-components";
import Toolbar from "./ui-components/Toolbar";
import AppContext from "./context/app-context";
import { usePdfInstance } from "./hooks/use-pdf-instance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import DetailsForm from "./DetailsForm";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	max-width: 100vw;
	align-items: center;
	padding: 4rem 0;
	overflow: hidden;
	${Toolbar} {
		margin-top: auto;
	}
`;

function App() {
	const [pageNumber, setPageNumber] = React.useState(1);
	const [maxNumberOfPage, setMaxNumberOfPage] = React.useState(null);
	const [validatedJsonFileContent, setValidatedJsonFileContent] =
		React.useState();
	const [loadingPdf, setLoadingPdf] = React.useState(false);

	const { pdfInstance, pdfUpdate, setPDFData, pdfData } = usePdfInstance();

	const contextValue = {
		nextPdfPage() {
			setPageNumber((previousValue) =>
				Math.min(previousValue + 1, maxNumberOfPage)
			);
		},
		previousPdfPage() {
			setPageNumber((previousValue) => Math.max(previousValue - 1, 1));
		},
		pageNumber,
		maxNumberOfPage,
		setMaxNumberOfPage,
		validatedJsonFileContent,
		setValidatedJsonFileContent,
		pdfUpdate,
		setPDFData,
		pdfInstance,
		pdfData,
		setLoadingPdf,
		loadingPdf,
	};

	return (
		<>
			<Routes>
				<Route path="/h" element={<DetailsForm />} />
				<Route path="/home" element={<h1>Home</h1>} />
				<Route
					path="/"
					element={
						<AppContext.Provider value={contextValue}>
							<ToastContainer />
							<AppContainer>
								<CustomPDFViewer
									setMaxNumberOfPage={setMaxNumberOfPage}
									pageNumber={pageNumber}
									pdfInstance={pdfInstance}
									loadingPdf={loadingPdf}
									setLoadingPdf={setLoadingPdf}
								/>
								<Toolbar />
							</AppContainer>
						</AppContext.Provider>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
