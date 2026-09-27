window.workflowExport = {
    download: function (rows) {
        if (!rows || rows.length === 0) return;
        const keys = Object.keys(rows[0]);
        const csv = [keys.join(','), ...rows.map(row => keys.map(key => '"' + String(row[key] ?? '').replaceAll('"', '""') + '"').join(','))].join('\n');
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
        link.download = 'ecosystem-workflow-register.csv';
        link.click();
        URL.revokeObjectURL(link.href);
    }
};
