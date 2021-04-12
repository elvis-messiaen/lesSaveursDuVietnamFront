import React, { Component } from 'react'
import { Formik} from 'formik'
import * as Yup from 'yup'

/**
 * @author Elvis Messiaen
 * création  du component Formik et Yup
 * pour la crétion de formulaire et gérer les exeptions
 */
class Adresse extends Component {
    /**
     * création d'un schéma Yup qui vérifie celon nos choix établi
     */
    userSchema = Yup.object().shape({
        nom: Yup.string().min(2, 'trop court').max(30, 'trop long').required('champs requis'),
        prenom: Yup.string().min(2, 'trop court').max(30, 'trop long').required('champs requis'),
        numero: Yup.string().min(2, 'trop court').max(6, 'trop long').required('champs requis'),
        nomDeRue: Yup.string().min(2, 'trop court').required('champs requis'),
        codePostal: Yup.string().min(5, 'trop court').max(6, 'trop long').required('champs requis'),
        ville: Yup.string().min(2, 'trop court').required('champs requis'),
        pays: Yup.string().min(2, 'trop court').required('champs requies'),
    })  
            render() {
              return (
                <div className="container-fluid p-5 bg-light
                d-flex flex-column justify-content-center align-items-center">
                  <Formik
                    onSubmit={this.submit}
                    initialValues={{nom: '', prenom: '', numerodeRue: '', nomDeRue: '', codePostal: '', ville: '', pays: ''}}
                    validationSchema={this.userSchema}
                  >
                    {({values,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    errors }) => (
                      <form onSubmit={ handleSubmit } className="bg-white border p-5 d-flex flex-column">
                        <div className="form-group">
                          <label>Nom de famille</label>
                          <input type="text"
                            name="nom" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.nom} />
                            {errors.nom ?
                            <div className="text-danger">{ errors.nom }</div>
                            : null }
                        </div>

                        <div className="form-group">
                          <label>Prenom</label>
                          <input type="text"
                                name="prenom"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.prenom} />
                              {errors.prenom ?
                            <div className="text-danger">{ errors.prenom }</div>
                            : null }
                        </div>
                        <div className="form-group">
                          <label>Numéro de rue</label>
                          <input type="text"
                                name="numerodeRue"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.numerodeRue} />
                              {errors.numerodeRue ?
                            <div className="text-danger">{ errors.numerodeRue }</div>
                            : null }                               
                        </div>
                        <div className="form-group">
                          <label>Nom de rue</label>
                          <input type="text"
                                name="nomDeRue"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.nomDeRue} />
                              {errors.nomDeRue ?
                            <div className="text-danger">{ errors.nomDeRue }</div>
                            : null }                               
                        </div>
                        <div className="form-group">
                          <label>Code postal</label>
                          <input type="text"
                                name="codePostal"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.codePostal} />
                              {errors.codePostal ?
                            <div className="text-danger">{ errors.codePostal }</div>
                            : null }                               
                        </div>
                        <div className="form-group">
                          <label>Ville</label>
                          <input type="text"
                                name="ville"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ville} />
                               {errors.ville ?
                            <div className="text-danger">{ errors.ville }</div>
                            : null }                               
                        </div>
                        <div className="form-group">
                          <label>Pays</label>
                          <input type="text"
                                name="pays"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pays} />
                               {errors.pays ?
                            <div className="text-danger">{ errors.pays }</div>
                            : null }                               
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                          Envoyer
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              )
            }
          }

export default Adresse