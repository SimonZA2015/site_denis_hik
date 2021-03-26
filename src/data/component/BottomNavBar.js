import React from 'react';
import {NavLink} from "react-router-dom";

import style from './styles/BottomNavBar.module.css';

const BottomNavBar = (props) => {

    return (
        <div className={style.body + ' NavBar'} >
            <NavLink className={style.nav} to={'/equine/'} ><img alt={'eqine'} src={'https://lh3.googleusercontent.com/4bN2UWl2yRC0WAsMJ9OS40iA8QMdohTYCG5_pTuSOzCDdm2bbx-p5drj11N6VpdPOvsN9fw9nERPKY1xywJaMVc_dz6V989veC-i2FgQjT7JH3XYXTUswv-AnE4yvAvryrNPPGdaiUWlkup527x4WtVf60fYPT5sQre-jsoCg2I2rCKLVw0iru_SaEQ84tOekl7OOtAv0LtcQHwajlKmZ492fDhe0Z52oMtpophq5pbyO9S6QjX-0za6Jx3z-Jho5K5uCnWJZ0B4NIRMaRZvo2pfqDNloBwewu8_p0mdKyk66Hcley6lMpBz69x1o75zRDvpvGr2de306a7_R1UEuaZVDs4FuBlPo85LXP1v2N8FCUeuAuZdYSwxUyk9Ve6rTL3ztirN5OLMRB3CNOKDT5JD7RyeKDbou38AKwxn-AXdH1UlHWWWgANt39rhzas66-YIuy-YMYArObPyEqZcboK4qojW7PNAZnLFn_xjrGGZSV1Ee7ctD8Zx2sC8BtVP3mCZtPuF3gTWz78gZZSqlp6Ig8gI2Ac8yJb8Hv9d2tv6YZYMJmmgMd6KkSNcJSZJIwtGlIZ8Avge3h4kPzRFK2cV6SSm2PEkmkxqfAlBhD1o9AEmh_ehogmYRPk_PVFkYL2NTRlAq_gYvJMP7h1Hgzul-j1d2AQzgd0hKIKeOs5S9rhIOAZRkaUknzRUZY5QD2YLwOqmsUjygCduy5-vDAIS=w1088-h604-no?authuser=0'}/></NavLink>
            <NavLink className={style.nav} to={'/programming/'} ><img alt={'programming'} src={'https://lh3.googleusercontent.com/q5Jqy7ZKPVSoIvBfo82Va_Rol_up00LJ-xCH7VYz65YNeFPVrT3n-n02c3mJvPuctgMany7xwyOI6IDZpSTFmt80Occ_7lzs3DBkjOMA2zZ9-w29gQBidqnj_ulOSpwa_Lukggg-HkD3s5gt_3Z_XOxXjW6vRaP6YSvZTV7h3Jz_raUCp8LHEgBkDprsXQGAIKBc6CCXXo6xW1t26G-lQbmqm6COMIQiZ-bhQ0sQgsAY3tnPKqhhjLnBO-Rkt2p76DLu4imTQC4hXRLBOz_r-PVr5Juc9S5xrcnbD2f7edQ49zYFeRmL2zZoYlehfUSCzJgO2rG8S3Xuv0x_SUZPGZjAzO1gsMgrSNgSxnwrHIOU_grDpARr5g1vNVjzIkG4uqZVsOs7YKIypq90wg8IftHeMEOpeE8p5KUCnCYn9vYF3bTdi5GgGLI9TcMtpO2aXs4kyi-FkTM985Ylfpw4JMh8BrIILvrqriMD2sh185RmMAM6qMCJ2qvD21xDmxG2HgYaGUT9NwxlC3EJAjURc3-119dlv2_tnepX7QRrlDiK3UafEoajA9kgCMTf4IQMwPv49ckHoSSHmfJMwvHzYjbx_q793VMD257FeTVYmGraoS3omEyCtUGu-PYRpSPlB2cxdmJyvBcyabZRwhH6hdWvC7pFc6w9l4Lpl5IUrWRS9ywQRFKsaelxaAf-4LNQkQT1O5wBtVV5KXUjkEQlEvWI=w599-h924-no?authuser=0'}/></NavLink>
            <NavLink className={style.nav} to={'/project/'} ><img alt={'projects'} src={'https://lh3.googleusercontent.com/MDAAZlrV_wO140wYZuHJBU29eo1m5o12gpXXvDcfrVg6PtJK_nXtQpmSTxqQIxyAwYZ_1Y5PeCXCnZCtyFdX5hBDoR09OiG0WY1T-IAwUPB1LO5Vj4PX0hPmfp3DqGvFzAOcb53Kv_rCxr0fsnBswM2Ulj_LxlNx70v1XNT565aa0OcS9w7ShZKaeCseryJFr63iULxbOc9OqhXlBWoLRecQFdiXQZ79sBPGoytu6L38AQHJCvFLMGOjwldnAybbBdEsbSXotVwtqOsYEklXsWTQgXLNDjhhoyL2-hVpu6HyW-aWfqhZrd_1_VXKSA-wJsLBBRZG35iPvhbp-Y0Nt-I5jrXdM0RgKc8C1m3E1e9BP-9s2Q3-slTb2vWpQXOJXUgD9hs5tn8mR4AKOsRMqy3u45uE-0DYWtPP72_DmnYsPfOT_CFCWy2Zdhtps-kbSAcJYHEzR7VVeboj-LSJIsOoOKxLD5R88bbO9jXRA8isazcNP6cDxqrkMk2bFteuGr44a3XwYcKqLyGJxnKcxT5VX6vnVMJlSvO-Bx6kH1bhF16w_UQsOnmnWR6OoQcjl0KN3D9NJQqOTIdMzCOOWd3FPhetmMxu6xalVKDKYua0hhRnBYKECupTWUR3ZGB3mHBBv_dEAqJ98Ng3KSJYY0RGxMpetzzF5UceskxqoZSnYRDAq7f9UnsmGmOWwb2UMqcmhgnMXyCoJsRFawCqHwNi=w824-h924-no?authuser=0'}/></NavLink>
        </div>
    )
}

export default BottomNavBar;