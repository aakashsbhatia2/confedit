function FormJson({template}) {
    console.log(template);
    const elements = [];

    template.forEach((item, i) => {
        if (item.title) {
            elements.push(<h1 key={`title-${i}`}>{item.title}</h1>);
        }

        if (item.description) {
            elements.push(<p key={`desc-${i}`}>{item.description}</p>);
        }

        if (item.settings) {
            item.settings.forEach((setting, j) => {
                Object.entries(setting).forEach(([key0, value0]) => {
                    if (value0.type === 'object') {
                        Object.entries(value0.properties).forEach(([key2, value2]) => {
                            if (value2.type === 'boolean') {
                                elements.push(
                                    <label key={`${key0}-${key2}`}>
                                        <p>{value0.title}</p>
                                        <input type="checkbox" defaultChecked={value2.default} />
                                    </label>
                                );
                            }
                        });
                    }
                });
            });
        }
    });

    return (
        <div>
            {elements}
        </div>
    )
}

export default FormJson;
