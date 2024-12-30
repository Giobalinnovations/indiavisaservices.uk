'use client';

import Highlight from '@/components/common/Highlight';
import BannerPage from '@/components/india/common/BannerPage';
import { useFormContext } from '@/context/formContext';
import useUpdatePatch from '@/hooks/useUpdatePatch';
import useVisaBookingPaymentPost from '@/hooks/useVisaBookingPaymentPost';
import { indianVisaPaymentFinalPrice } from '@/lib/indianVisaPaymentFinalPrice';
import axiosInstance from '@/services/api';
import apiEndpoint from '@/services/apiEndpoint';
import { useQuery } from '@tanstack/react-query';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { usePathname, useRouter } from 'next/navigation';
import Script from 'next/script';
import { ImSpinner2 } from 'react-icons/im';
import * as Yup from 'yup';

const paymentFormSchema = Yup.object().shape({
  termsAndConditions: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
});

const StepEight = () => {
  const pathName = usePathname();
  const { state } = useFormContext();
  const router = useRouter();
  console.log(state);
  const {
    isPending,
    error,
    data: getAllStepsData,
    isSuccess: getAllStepsDataIsSuccess,
    refetch,
  } = useQuery({
    queryKey: ['getAllStepsData'],
    queryFn: () =>
      axiosInstance.get(`${apiEndpoint.GET_VISA_STEP1_BY_ID}${state.formId}`),
    enabled: !!state.formId,
  });

  const postPayment = useVisaBookingPaymentPost({
    apiEndpointUrl: `api/checkout-session/${state.formId}`,
    successMessage: 'Successful',
  });

  const paymentUpdateMutation = useUpdatePatch(
    apiEndpoint.UPDATE_VISA_ADD_STEP1,
    state.formId,
    'successful',
    '/',
    false
  );

  const handlePayLater = () => {
    paymentUpdateMutation.mutate({
      lastExitStepUrl: pathName,
      visaStatus: 'pending payment',
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center flex-1 h-full pt-20">
        <ImSpinner2 className="w-4 h-4 text-black animate-spin" />
        loading
      </div>
    );
  }

  if (error) {
    return router.push('/visa/step-seven');
  }

  if (getAllStepsDataIsSuccess && getAllStepsData?.data?.paid === true) {
    return (
      <div>
        <div>
          Payment is completed for this application Id :{' '}
          {getAllStepsData?.data?._id ?? 'application id not found'}{' '}
        </div>
        <div>
          visaStatus: {getAllStepsData?.data?.visaStatus ?? 'no status found'}
        </div>
      </div>
    );
  }

  if (getAllStepsDataIsSuccess && getAllStepsData?.data?.paid === false) {
    console.log(
      getAllStepsData?.data?.nationalityRegion ?? '',
      getAllStepsData?.data?.visaService ?? '',
      getAllStepsData?.data?.eTouristVisa ?? ''
    );
    return (
      <>
        <div>
          <BannerPage heading="E-VISA APPLICATION FORM" />

          <div className="container py-12 text-sm">
            <h2 className="py-3 text-lg font-semibold text-center text-white rounded-t bg-secondary">
              Online VISA Fee Payment
            </h2>
            <div className="flex items-center justify-center space-x-4 ">
              <h2 className="py-1 text-lg italic font-semibold text-secondary">
                Applicant Name :-
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify text-primary">
                {getAllStepsData?.data?.step2?.firstName}{' '}
                {getAllStepsData?.data?.step2?.lastName}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 ">
              <h2 className="py-1 text-lg italic font-semibold text-secondary">
                Application Id :-
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify text-primary">
                {state?.formId}
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 ">
              <h2 className="py-1 text-lg italic font-semibold text-secondary">
                Application Fees :-
              </h2>
              <p className="font-bold leading-relaxed tracking-wide text-justify text-primary">
                <Highlight
                  className="text-lg font-bold"
                  text={`$ ${indianVisaPaymentFinalPrice(
                    35,
                    getAllStepsData?.data?.nationalityRegion ?? '',
                    getAllStepsData?.data?.visaService ?? '',
                    getAllStepsData?.data?.eTouristVisa ?? ''
                  )}`}
                />
              </p>
            </div>

            <div className="p-4">
              <p className="leading-relaxed tracking-wide text-center">
                On pressing &quot;Pay Now&quot;,the application will be
                redirected to Payment Gateway to pay the visa fee and will be
                outside the control of Visa Online Application. The
                responsibility of security of transaction process and details on
                payment page will be of Payment gateway. Bank Payment Gateway
                accepts both OTP (One Time Password) and non-OTP transactions.
                <br />
                In case of any issue, please contact your Bank. Application ID
                will be blocked after three failed attempts of payment, in such
                case applicant has to apply again. On pressing &quot;Pay
                Later&quot;, you can pay the visa fee later using your
                Application ID and date of birth.
                <br />
                Please note that your application for e-Visa will not be
                submitted without fee payment. It should be done prior to 4 days
                of Journey date.
              </p>
            </div>
            <div className="p-4">
              <h2 className="py-1 text-lg italic font-semibold text-secondary">
                Disclaimer
              </h2>
              <p className="leading-relaxed tracking-wide text-justify">
                All travelers seeking admission to India under the e-Visa
                (e-Visa) scheme are required to carry printout of the Electronic
                Travel Authorization (ETA) sent through email by Bureau of
                Immigration.
                <br />
                If your e-Visa application is approved, it establishes that you
                are admissible to enter India under the e-Visa scheme of the
                Government of India. Upon arrival in India, records would be
                examined by the Immigration Officer.
                <br />
                Biometric Details (Photograph & Fingerprints) of the applicant
                shall be mandatorily captured upon arrival into India.
                Non-compliance to do so would lead to denial of entry into
                India. A determination that you are not eligible for e-Visa does
                not preclude you from applying for a regular Visa in Indian
                Mission. All information provided by you, or on your behalf by a
                designated third party, must be true and correct.
                <br />
                An Electronic Travel Authorization (ETA) may be revoked at any
                time and for any reasons whatsoever. You may be subject to legal
                action, if you make materially false, fictitious, or fraudulent
                statement or representation in an Electronic Travel
                Authorization (ETA) application submitted by you. The
                transaction cannot be cancelled or amended once the fee has been
                paid.
              </p>
            </div>

            {/* form */}
            <Formik
              initialValues={{ termsAndConditions: false }}
              validationSchema={paymentFormSchema}
              validateOnChange={true}
              validateOnMount={true}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                postPayment.mutate({
                  domainUrl: process.env.NEXT_PUBLIC_DOMAIN_URL,
                  termsAndConditions: values.termsAndConditions,
                  termsAndConditionsContent: `I, the applicant, hereby certify that I agree to all the terms
                  and conditions given on the website indiavisasonline.org.in
                  and understand all the questions and statements of this
                  application. The answers and information furnished in this
                  application are true and correct to the best of my knowledge
                  and belief. I understand and agree that once the fee is paid
                  towards the Temporary application ID{' '}
                  <span className="font-bold">${state?.formId}</span> is 100%
                  non-refundable and I will not claim a refund or dispute the
                  transaction incase of cancellation request raised at my end. I
                  also understand that indiansvisaonline.org.in is only
                  responsible for processing my application and the visa may be
                  granted or rejected by the indian government. I authorized
                  them to take the payment from my card online.`,
                });
                // console.log(values, state.formId);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({ values, isValid, handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="px-4">
                  <h2 className="text-lg italic font-semibold text-secondary">
                    Undertaking
                  </h2>
                  <p className="leading-relaxed tracking-wide text-justify">
                    <Field
                      type="checkbox"
                      id="termsAndConditions"
                      name="termsAndConditions"
                      className="w-4 h-4"
                    />
                    <label htmlFor="termsAndConditions">
                      I, the applicant, hereby certify that I agree to all the
                      terms and conditions given on the website
                      indiavisasonline.org.in and understand all the questions
                      and statements of this application. The answers and
                      information furnished in this application are true and
                      correct to the best of my knowledge and belief. I
                      understand and agree that once the fee is paid towards the
                      Temporary application ID{' '}
                      <span className="font-bold">{state?.formId}</span> is 100%
                      non-refundable and I will not claim a refund or dispute
                      the transaction incase of cancellation request raised at
                      my end. I also understand that indiansvisaonline.org.in is
                      only responsible for processing my application and the
                      visa may be granted or rejected by the indian government.
                      I authorized them to take the payment from my card online.
                    </label>
                  </p>
                  <ErrorMessage name="termsAndConditions">
                    {errorMsg => <div style={{ color: 'red' }}>{errorMsg}</div>}
                  </ErrorMessage>

                  <div className="p-4">
                    <p className="pt-12 font-bold leading-relaxed tracking-wide text-justify">
                      Please note down the Application ID :
                      <span className="font-bold text-primary">
                        {state?.formId}
                      </span>{' '}
                      which will be required for Status Enquiry, e-Visa Printing
                      and Payment of visa processing fee.{' '}
                    </p>
                  </div>
                  <div className="space-x-4 text-center">
                    <button
                      disabled={paymentUpdateMutation.isPending}
                      className={`formbtn cursor-pointer inline-flex items-center gap-3 ${
                        paymentUpdateMutation.isPending
                          ? 'cursor-not-allowed opacity-50'
                          : ''
                      }`}
                      type="button"
                      onClick={handlePayLater}
                    >
                      {paymentUpdateMutation.isPending ? (
                        <>
                          <ImSpinner2 className="animate-spin" /> Loading
                        </>
                      ) : (
                        'Pay Later'
                      )}
                    </button>
                    <button
                      disabled={!isValid}
                      className={`formbtn cursor-pointer inline-flex items-center gap-3 ${
                        !isValid ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      type="submit"
                    >
                      {postPayment.isPending ? 'Processing...' : 'Pay Now'}
                    </button>

                    {postPayment.isError ? (
                      <div className="text-red-500">
                        An error occurred: {postPayment.error.message}
                      </div>
                    ) : null}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <Script id="anayltics">
          {`window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};heap.load("2659842454");`}
        </Script>
      </>
    );
  }
};

export default StepEight;
