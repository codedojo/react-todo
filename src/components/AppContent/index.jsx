import React from 'react';

import './index.scss';

export default function AppContent({ ...props }) {
    return (
        <main id="app-content" {...props} />
    );
}