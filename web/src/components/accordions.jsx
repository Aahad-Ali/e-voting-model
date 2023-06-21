import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Accordions = () => {
  return (
    <>
      <div className="accordion-container">
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Company 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button variant="contained" type="button">
                Shareholders
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Company 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button variant="contained" type="button">
                Shareholders
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Company 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button variant="contained" type="button">
                Shareholders
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="accordion-container">
        <div className="artical">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>company 4</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button variant="contained" type="button">
                Shareholders
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>company 5</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button variant="contained" type="button">
                Shareholders
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>

        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>company 6</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button variant="contained" type="button">
                Shareholders
              </Button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Accordions;
