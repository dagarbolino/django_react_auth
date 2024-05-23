import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';


import { red } from '@mui/material/colors';



export default function AccessibilityTooltips() {
  return (
    <div>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon sx={{ color: red[600] }} />
        </IconButton>
      </Tooltip>
      <Tooltip describeChild title="To modify it">
        <EditIcon color="primary"/>
      </Tooltip>
    </div>
  );
}
