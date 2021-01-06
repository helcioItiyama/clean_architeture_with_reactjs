import React, { useContext } from 'react';
import Spinner from '@/presentation/components/spinner/spinner';
import Context from '@/presentation/context/form/form-context';
import Styles from './form-status-styles.scss';

const FormStatus: React.FC = () => {
  const { state } = useContext(Context);
  const { isLoading, mainError } = state;

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {mainError && <span className={Styles.error}>{mainError}</span>}
    </div>
  );
};

export default FormStatus;
