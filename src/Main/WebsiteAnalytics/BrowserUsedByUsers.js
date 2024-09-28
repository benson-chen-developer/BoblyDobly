import { Header } from "../Shared/Header"

export const BrowserUsedByUsers = ({w, h}) => {
    return (
        <div style={{
            width: w, 
            height: h, 
            background: '#fff', 
            borderRadius: 10,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
            <div className='blk2'>
                <Header name="Acquisition"/>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                        <th style={{ fontSize: '15px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Browser</th>
                        <th style={{ fontSize: '15px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Bounce Rate</th>
                        <th style={{ fontSize: '15px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'left' }}>Conversion Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" style={{marginBottom:'5px', marginRight:'5px'}}>
                                <path fill="#41505F" d="m10.365 19.833l1.93-3.342q-.147.009-.295.009a4.5 4.5 0 0 1-3.94-2.325L4.795 8.52a8.003 8.003 0 0 0 5.57 11.313m2.225.146A8 8 0 0 0 19.602 9.5h-3.86c.479.715.758 1.575.758 2.5c0 .848-.234 1.64-.642 2.318zm1.553-6.691l.022-.038a2.5 2.5 0 1 0-4.354-.042l.024.042a2.5 2.5 0 0 0 4.308.037m-8.108-6.62l1.928 3.34A4.5 4.5 0 0 1 12 7.5h6.615A7.99 7.99 0 0 0 12 4a7.98 7.98 0 0 0-5.965 2.669M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10" />
                            </svg>
                            Google Chrome
                        </td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>40.95%</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>19.45%</td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <svg xmlns="http://www.w3.org/2000/svg"width="20px" height="20px" viewBox="0 0 24 24" style={{marginBottom:'5px', marginRight:'5px'}}>
                                <path fill="#41505F" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10c0-1.463.314-2.854.88-4.106c.466-.939 1.233-1.874 1.85-2.194c-.653 1.283-.973 2.54-1.04 3.383c.454-1.5 1.315-2.757 2.52-3.644c2.066-1.519 4.848-1.587 5.956-.62c-2.056.707-4.296 3.548-3.803 6.876c.08.55.245 1.083.489 1.582c-.384-1.01-.418-2.433.202-3.358c.692-1.03 1.678-1.248 2.206-1.136c-.208-.044-.668.836-.736.991a3 3 0 0 0-.251 1.25a3.4 3.4 0 0 0 1.03 2.38c1.922 1.871 5.023 1.135 6.411-1.002c.954-1.471 1.07-3.968-.154-5.952a7 7 0 0 0-1.084-1.32c-1.85-1.766-4.48-2.57-6.982-2.205q-1.659.266-2.824.956C7.756 2.798 9.912 2 12 2M6.876 7.705c-2.253.781-3.501 3.17-2.579 6.46a8 8 0 0 0 7.455 5.831L12 20a8 8 0 0 0 7.985-7.504l.009-.212q-.194.522-.463.98l-.14.227c-2.104 3.239-6.681 4.075-9.48 1.348a5.4 5.4 0 0 1-.962-1.257l-.106-.201q-2.604-.58-2.543-2.817c.027-.991.23-1.96.575-2.86" />
                            </svg>
                            Mozilla Firefox</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>47.58%</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>19.99%</td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" style={{marginBottom:'5px', marginRight:'5px'}}>
                                <path fill="#41505F" d="m17.813 6.503l-4.398 6.911l-6.911 4.398A7.97 7.97 0 0 0 11 19.938V18h2v1.938a7.96 7.96 0 0 0 3.906-1.618l-1.37-1.37l1.414-1.414l1.37 1.37A7.96 7.96 0 0 0 19.939 13h-1.938v-2h1.938a7.97 7.97 0 0 0-2.126-4.497m-.315-.315a7.97 7.97 0 0 0-4.497-2.126V6h-2V4.062A7.96 7.96 0 0 0 7.095 5.68l1.37 1.37l-1.414 1.414l-1.37-1.37A7.96 7.96 0 0 0 4.063 11H6v2H4.063a7.97 7.97 0 0 0 2.126 4.497l4.398-6.911zM12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10" />
                            </svg>
                            Apple Safari</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>56.50%</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>11.00%</td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" style={{marginBottom:'5px', marginRight:'5px'}}>
                                <path fill="#41505F" d="M20.645 8.586c-.17-.711-.441-1.448-.774-2.021c-.771-1.329-1.464-2.237-3.177-3.32S13.077 2 12.171 2c-2.415 0-4.211.86-5.525 1.887C3.345 6.47 3.001 11 3.001 11s1.221-2.045 3.54-3.526C7.944 6.579 9.942 6 11.569 6c4.317 0 4.432 4 4.432 4h-7c0-2 1-3 1-3s-5 2-5 7.044c0 .487-.003 1.372.248 2.283c.232.843.7 1.705 1.132 2.353c1.221 1.832 3.045 2.614 3.916 2.904c.996.332 2.029.416 3.01.416c2.72 0 4.877-.886 5.694-1.275v-4.172c-.758.454-2.679 1.447-5 1.447c-5 0-5-4-5-4h12v-2.49s-.039-1.593-.356-2.924" />
                            </svg>
                            Microsoft Edge</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>59.62%</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>4.69%</td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" style={{marginBottom:'5px', marginRight:'5px'}}>
                                <path fill="#41505F" d="M14.767 19.51a8.003 8.003 0 0 0 0-15.02C16.712 5.977 18 8.935 18 12s-1.289 6.024-3.235 7.51M9.235 4.49a8.003 8.003 0 0 0 0 15.02C7.29 18.023 6.001 15.065 6.001 12S7.29 5.976 9.235 4.49M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-3.5c2 0 4-3.033 4-6.5s-2-6.5-4-6.5s-4 3.033-4 6.5s2 6.5 4 6.5" />
                            </svg>
                            Opera</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>52.50%</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>8.75%</td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" style={{marginBottom:'5px', marginRight:'5px'}}>
                                <path fill="#41505F" d="M20.154 8.514c.85-2.039.906-3.738-.113-4.757c-1.133-1.132-3.852-.792-6.737.565h-.341c-2.037 0-4.02.738-5.492 2.039c-1.244 1.133-2.15 2.605-2.547 4.246c.283-.337 1.869-2.207 3.68-3.226c.058 0 .51-.283.51-.283c-.057 0-.905.85-1.074 1.02c-3.965 4.076-6.285 10.248-4.473 12.059c1.188 1.189 3.34.906 5.831-.452c1.075.51 2.265.735 3.565.735c1.699 0 3.285-.453 4.643-1.359c1.416-.906 2.436-2.319 3.059-3.962h-4.416c-.566 1.075-1.869 1.812-3.227 1.812c-1.926 0-3.512-1.586-3.568-3.397v-.169h11.551v-.17c0-.283.057-.623.057-.848c-.001-1.362-.341-2.664-.908-3.853M4.811 19.838c-.906-.906-.621-2.662.453-4.756c.51 1.416 1.359 2.662 2.435 3.567c.341.282.735.565 1.133.792c-1.814.963-3.285 1.133-4.021.397m11.606-8.606H9.51v-.057c.113-1.756 1.754-3.285 3.681-3.285c1.812 0 3.284 1.416 3.397 3.285v.057zm3.454-3.171a7 7 0 0 0-1.303-1.585a8.5 8.5 0 0 0-2.718-1.699c1.813-.849 3.341-.961 4.134-.169c.623.736.567 1.981-.113 3.453q0 .086 0 0q0 .086 0 0" />
                            </svg>
                            Internet Explorer</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>44.95%</td>
                        <td style={{ fontSize: '14px', padding: '10px', borderBottom: '1px solid #ddd', textAlign: 'right' }}>8.12%</td>
                    </tr>
                    </tbody>

                </table>

            </div>
        </div>
    )
}